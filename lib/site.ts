// Public origin used for canonical URLs, the sitemap and robots.txt.
// Set NEXT_PUBLIC_SITE_URL to the live domain; on Vercel the production
// domain is picked up automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteName = "Chitra Printers";

export const sitePages = ["/", "/about", "/services", "/yes-plus", "/contact"];
