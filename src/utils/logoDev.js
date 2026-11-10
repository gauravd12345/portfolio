export function getLogoDevImageUrl(domain, token) {
  if (!domain || !token) return null;
  const params = new URLSearchParams({
    token,
    size: '128',
    format: 'png',
  });
  return `https://img.logo.dev/${encodeURIComponent(domain)}?${params.toString()}`;
}

export function getFaviconUrl(domain) {
  if (!domain) return null;
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

// Ordered from most to least preferred; the UI falls through on load errors.
export function getCompanyLogoSources(exp, token) {
  return [
    exp.logo,
    getLogoDevImageUrl(exp.logoDomain, token),
    getFaviconUrl(exp.logoDomain),
  ].filter(Boolean);
}
