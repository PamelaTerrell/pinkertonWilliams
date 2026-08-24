import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routeMetadata } from "../src/config/routeMetadata.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = path.join(projectRoot, "dist");
const templatePath = path.join(distDirectory, "index.html");
const sitemapPath = path.join(projectRoot, "public", "sitemap.xml");
const expectedRoutes = [
  "/",
  "/officers",
  "/events",
  "/purple-heart-honoree",
  "/membership",
  "/gallery/christmas-party",
  "/contact",
];

const escapeText = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const escapeAttribute = (value) =>
  escapeText(value).replaceAll('"', "&quot;");

const getAttribute = (tag, name) => {
  const match = tag.match(
    new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i")
  );

  return match ? match[1] ?? match[2] : null;
};

const findTags = (html, tagName, attributeName, attributeValue) => {
  const tagPattern = new RegExp(`<${tagName}\\b[^>]*>`, "gi");

  return Array.from(html.matchAll(tagPattern)).filter(
    ([tag]) => getAttribute(tag, attributeName) === attributeValue
  );
};

const replaceUniqueTag = (
  html,
  { label, tagName, attributeName, attributeValue, replacement }
) => {
  const matches = findTags(html, tagName, attributeName, attributeValue);

  if (matches.length !== 1) {
    throw new Error(
      `${label}: expected exactly one matching tag, found ${matches.length}.`
    );
  }

  const match = matches[0];
  return `${html.slice(0, match.index)}${replacement}${html.slice(
    match.index + match[0].length
  )}`;
};

const replaceTitle = (html, title) => {
  const matches = Array.from(html.matchAll(/<title\b[^>]*>[\s\S]*?<\/title>/gi));

  if (matches.length !== 1) {
    throw new Error(
      `title: expected exactly one matching tag, found ${matches.length}.`
    );
  }

  const match = matches[0];
  const replacement = `<title>${escapeText(title)}</title>`;
  return `${html.slice(0, match.index)}${replacement}${html.slice(
    match.index + match[0].length
  )}`;
};

const metadataTag = (attributeName, attributeValue, content) =>
  `<meta ${attributeName}="${attributeValue}" content="${escapeAttribute(
    content
  )}" />`;

const replaceMetadata = (template, metadata) => {
  let html = replaceTitle(template, metadata.title);

  const replacements = [
    {
      label: "description",
      tagName: "meta",
      attributeName: "name",
      attributeValue: "description",
      replacement: metadataTag("name", "description", metadata.description),
    },
    {
      label: "canonical",
      tagName: "link",
      attributeName: "rel",
      attributeValue: "canonical",
      replacement: `<link rel="canonical" href="${escapeAttribute(
        metadata.canonicalUrl
      )}" />`,
    },
    ...[
      ["og:title", metadata.openGraph.title],
      ["og:description", metadata.openGraph.description],
      ["og:url", metadata.openGraph.url],
      ["og:image", metadata.openGraph.image],
    ].map(([property, content]) => ({
      label: property,
      tagName: "meta",
      attributeName: "property",
      attributeValue: property,
      replacement: metadataTag("property", property, content),
    })),
    ...[
      ["twitter:title", metadata.twitter.title],
      ["twitter:description", metadata.twitter.description],
      ["twitter:image", metadata.twitter.image],
    ].map(([name, content]) => ({
      label: name,
      tagName: "meta",
      attributeName: "name",
      attributeValue: name,
      replacement: metadataTag("name", name, content),
    })),
  ];

  replacements.forEach((replacement) => {
    html = replaceUniqueTag(html, replacement);
  });

  return html;
};

const requireUniqueTagValue = (
  html,
  { label, tagName, attributeName, attributeValue, valueAttribute, expected }
) => {
  const matches = findTags(html, tagName, attributeName, attributeValue);

  if (matches.length !== 1) {
    throw new Error(
      `${label}: expected exactly one matching tag, found ${matches.length}.`
    );
  }

  const actual = getAttribute(matches[0][0], valueAttribute);
  if (actual !== escapeAttribute(expected)) {
    throw new Error(`${label}: expected "${expected}", found "${actual}".`);
  }
};

const collectPreservedMarkup = (html) => ({
  moduleScripts: Array.from(
    html.matchAll(/<script\b[^>]*type=["']module["'][^>]*><\/script>/gi),
    ([tag]) => tag
  ),
  stylesheets: findTags(html, "link", "rel", "stylesheet").map(([tag]) => tag),
  sourceReferences: Array.from(
    html.matchAll(/<(?!meta\b)[a-z][^>]*\bsrc\s*=\s*(?:"[^"]*"|'[^']*')[^>]*>/gi),
    ([tag]) => tag
  ),
  linkReferences: Array.from(html.matchAll(/<link\b[^>]*>/gi), ([tag]) => tag)
    .filter((tag) => getAttribute(tag, "rel") !== "canonical")
    .map((tag) => getAttribute(tag, "href")),
});

const validateDocument = (html, route, metadata, preservedMarkup) => {
  const titles = Array.from(
    html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)
  );
  if (titles.length !== 1 || titles[0][1] !== escapeText(metadata.title)) {
    throw new Error(`${route}: title is missing, duplicated, or incorrect.`);
  }

  const fields = [
    ["description", "meta", "name", "description", "content", metadata.description],
    ["canonical", "link", "rel", "canonical", "href", metadata.canonicalUrl],
    ["og:title", "meta", "property", "og:title", "content", metadata.openGraph.title],
    [
      "og:description",
      "meta",
      "property",
      "og:description",
      "content",
      metadata.openGraph.description,
    ],
    ["og:url", "meta", "property", "og:url", "content", metadata.openGraph.url],
    ["og:image", "meta", "property", "og:image", "content", metadata.openGraph.image],
    ["twitter:title", "meta", "name", "twitter:title", "content", metadata.twitter.title],
    [
      "twitter:description",
      "meta",
      "name",
      "twitter:description",
      "content",
      metadata.twitter.description,
    ],
    ["twitter:image", "meta", "name", "twitter:image", "content", metadata.twitter.image],
  ];

  fields.forEach(
    ([label, tagName, attributeName, attributeValue, valueAttribute, expected]) =>
      requireUniqueTagValue(html, {
        label: `${route} ${label}`,
        tagName,
        attributeName,
        attributeValue,
        valueAttribute,
        expected,
      })
  );

  if (metadata.openGraph.url !== metadata.canonicalUrl) {
    throw new Error(`${route}: og:url must equal the canonical URL.`);
  }

  const roots = html.match(/<div\s+id=["']root["']\s*><\/div>/gi) ?? [];
  if (roots.length !== 1) {
    throw new Error(`${route}: the empty React root was not preserved.`);
  }

  const actualPreservedMarkup = collectPreservedMarkup(html);
  for (const key of Object.keys(preservedMarkup)) {
    if (
      JSON.stringify(actualPreservedMarkup[key]) !==
      JSON.stringify(preservedMarkup[key])
    ) {
      throw new Error(`${route}: ${key} changed from the Vite template.`);
    }
  }
};

const validateRoute = (route, metadata) => {
  if (!/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(route)) {
    throw new Error(`Unsafe route path: "${route}".`);
  }

  const canonical = new URL(metadata.canonicalUrl);
  if (
    canonical.origin !== "https://pinkertonwilliams.org" ||
    canonical.pathname !== route ||
    canonical.search ||
    canonical.hash
  ) {
    throw new Error(`${route}: canonical URL does not match the route.`);
  }

  const requiredValues = [
    metadata.title,
    metadata.description,
    metadata.openGraph.title,
    metadata.openGraph.description,
    metadata.openGraph.url,
    metadata.openGraph.image,
    metadata.twitter.title,
    metadata.twitter.description,
    metadata.twitter.image,
  ];
  if (requiredValues.some((value) => typeof value !== "string" || !value)) {
    throw new Error(`${route}: required metadata contains an invalid value.`);
  }

  for (const imageUrl of [
    metadata.openGraph.image,
    metadata.twitter.image,
  ]) {
    const image = new URL(imageUrl);
    if (image.protocol !== "https:") {
      throw new Error(`${route}: social image URLs must use HTTPS.`);
    }
  }
};

const validateSitemap = async () => {
  const sitemap = await readFile(sitemapPath, "utf8");
  const sitemapUrls = Array.from(
    sitemap.matchAll(/<loc>([^<]+)<\/loc>/g),
    ([, url]) => url
  );
  const metadataUrls = expectedRoutes.map(
    (route) => routeMetadata[route].canonicalUrl
  );

  if (
    new Set(sitemapUrls).size !== sitemapUrls.length ||
    JSON.stringify(sitemapUrls) !== JSON.stringify(metadataUrls)
  ) {
    throw new Error(
      "Sitemap URLs must exactly match the seven route metadata entries."
    );
  }
};

const main = async () => {
  const configuredRoutes = Object.keys(routeMetadata);
  if (JSON.stringify(configuredRoutes) !== JSON.stringify(expectedRoutes)) {
    throw new Error(
      "Route metadata must contain exactly the seven expected public routes."
    );
  }

  await validateSitemap();

  const template = await readFile(templatePath, "utf8");
  const preservedMarkup = collectPreservedMarkup(template);
  const homepageMetadata = routeMetadata["/"];
  validateRoute("/", homepageMetadata);
  validateDocument(template, "/", homepageMetadata, preservedMarkup);

  const generatedDocuments = new Map();
  for (const route of expectedRoutes.slice(1)) {
    const metadata = routeMetadata[route];
    validateRoute(route, metadata);

    const routeSpecificValues = [
      ["title", metadata.title, homepageMetadata.title],
      ["description", metadata.description, homepageMetadata.description],
      ["canonicalUrl", metadata.canonicalUrl, homepageMetadata.canonicalUrl],
      ["og:title", metadata.openGraph.title, homepageMetadata.openGraph.title],
      [
        "og:description",
        metadata.openGraph.description,
        homepageMetadata.openGraph.description,
      ],
      ["og:url", metadata.openGraph.url, homepageMetadata.openGraph.url],
      ["twitter:title", metadata.twitter.title, homepageMetadata.twitter.title],
      [
        "twitter:description",
        metadata.twitter.description,
        homepageMetadata.twitter.description,
      ],
    ];
    for (const [label, value, homepageValue] of routeSpecificValues) {
      if (value === homepageValue) {
        throw new Error(`${route}: ${label} was unchanged from the homepage.`);
      }
    }

    const html = replaceMetadata(template, metadata);
    validateDocument(html, route, metadata, preservedMarkup);

    const outputDirectory = path.resolve(
      distDirectory,
      `.${route}`
    );
    const relativeOutputDirectory = path.relative(distDirectory, outputDirectory);
    if (
      relativeOutputDirectory.startsWith("..") ||
      path.isAbsolute(relativeOutputDirectory)
    ) {
      throw new Error(`${route}: output path escapes the dist directory.`);
    }

    generatedDocuments.set(
      path.join(outputDirectory, "index.html"),
      html
    );
  }

  for (const [outputPath, html] of generatedDocuments) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, "utf8");
  }

  console.log(
    `Validated the homepage and generated ${generatedDocuments.size} route HTML files.`
  );
};

main().catch((error) => {
  console.error(`Route HTML generation failed: ${error.message}`);
  process.exitCode = 1;
});
