/**
 * Resolves static asset paths relative to the base URL.
 * Ensures images and assets load properly across local development,
 * GitHub Pages (e.g. /renovation-landing-page/), and root domains.
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}
