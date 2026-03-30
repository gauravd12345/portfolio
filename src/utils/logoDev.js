export function getLogoDevImageUrl(domain, token) {
  if (!domain || !token) return null;
  const params = new URLSearchParams({
    token,
    size: '128',
    format: 'png',
  });
  return `https://img.logo.dev/${encodeURIComponent(domain)}?${params.toString()}`;
}
