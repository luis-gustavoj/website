import { PAGES } from "@/shared/pages";

export default async function sitemap() {
  const routes = PAGES.map(({ href }) => ({
    url: `https://luisoila.dev${href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
