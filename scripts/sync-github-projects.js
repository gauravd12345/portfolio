const fs = require('fs');
const path = require('path');

const GITHUB_USER = 'gauravd12345';
const PROJECTS_FILE = path.join(__dirname, '..', 'src', 'data', 'projects.json');

function normalizeUrl(url) {
  return (url || '').trim().toLowerCase().replace(/\.git$/, '').replace(/\/+$/, '');
}

async function fetchRepos() {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'portfolio-sync' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const repos = [];
  for (let page = 1; ; page++) {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=created&per_page=100&page=${page}`,
      { headers }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
    const batch = await res.json();
    repos.push(...batch);
    if (batch.length < 100) return repos;
  }
}

function toProject(repo) {
  const tech = repo.topics?.length ? repo.topics : [repo.language].filter(Boolean);
  return {
    title: repo.name,
    description: repo.description || '',
    tech,
    github: repo.html_url,
    categories: [],
    visible: false,
  };
}

async function main() {
  const data = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf8'));
  const original = JSON.stringify(data);

  for (const project of data.projects) {
    if (project.visible === undefined) project.visible = true;
  }

  const known = new Set(data.projects.map((p) => normalizeUrl(p.github)).filter(Boolean));
  const repos = (await fetchRepos()).filter((r) => !r.fork && !r.private);
  const added = repos.filter((r) => !known.has(normalizeUrl(r.html_url))).map(toProject);
  data.projects.push(...added);

  if (JSON.stringify(data) === original) {
    console.log('Projects already up to date.');
    return;
  }

  fs.writeFileSync(PROJECTS_FILE, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`Added ${added.length} new repo(s) as hidden projects:`);
  for (const p of added) console.log(`  - ${p.title}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
