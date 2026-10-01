import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../lib/site";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Sets the document title plus per-page SEO tags (description, canonical,
 * Open Graph and Twitter). Pass `{ noindex: true }` for pages that should
 * not appear in search results (e.g. the 404 page).
 */
export function usePageTitle(
  title: string,
  description?: string,
  options: { noindex?: boolean } = {}
) {
  const { pathname } = useLocation();
  const { noindex = false } = options;

  useEffect(() => {
    const fullTitle = `${title} — Chennai Coder`;
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = fullTitle;
    upsertCanonical(url);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:url", url);
    upsertMeta("name", "twitter:title", fullTitle);

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
  }, [title, description, pathname, noindex]);
}
