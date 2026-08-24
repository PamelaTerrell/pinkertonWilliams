import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { routeMetadata } from "../config/routeMetadata.js";

const setContent = (selector, content) => {
  document.head.querySelector(selector)?.setAttribute("content", content);
};

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname] ?? routeMetadata["/"];

    document.title = metadata.title;
    setContent('meta[name="description"]', metadata.description);
    document.head
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", metadata.canonicalUrl);
    setContent('meta[property="og:title"]', metadata.openGraph.title);
    setContent(
      'meta[property="og:description"]',
      metadata.openGraph.description
    );
    setContent('meta[property="og:url"]', metadata.openGraph.url);
    setContent('meta[property="og:image"]', metadata.openGraph.image);
    setContent('meta[name="twitter:title"]', metadata.twitter.title);
    setContent(
      'meta[name="twitter:description"]',
      metadata.twitter.description
    );
    setContent('meta[name="twitter:image"]', metadata.twitter.image);
  }, [pathname]);

  return null;
}
