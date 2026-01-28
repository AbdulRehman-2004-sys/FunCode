export default function sitemap() {
  const baseUrl = "https://funcodeofficial.com";

  const pages = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/app-development",
    "/services/ui-ux-design",
    "/services/seo-marketing",
    "/services/video-editing",
    "/portfolio",
    "/contact",
    "/get-a-quote",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
