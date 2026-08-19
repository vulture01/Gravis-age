import { useEffect } from "react";

const SITE_NAME = "Gravis Agency";

function setMeta(name, content, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Drop into any page component to set that page's <title> and meta
 * description. Falls back gracefully — this is a client-side SPA, so a
 * static index.html already carries sensible defaults for first paint
 * and for crawlers that don't execute JS.
 */
export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Grow your brand.`;
    document.title = fullTitle;

    if (description) {
      setMeta("description", description);
      setMeta("og:title", fullTitle, "property");
      setMeta("og:description", description, "property");
      setMeta("twitter:title", fullTitle);
      setMeta("twitter:description", description);
    }
  }, [title, description]);

  return null;
}
