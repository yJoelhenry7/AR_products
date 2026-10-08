import type { Metadata } from "next";
import {
  BRAND_FULL_NAME,
  BRAND_NAME,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
} from "./brand";

export type SeoCopy = {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImageAlt: string;
  siteName: string;
};

function guessImageType(url: string): string {
  const clean = url.split("?")[0]?.toLowerCase() ?? "";
  if (clean.endsWith(".jpg") || clean.endsWith(".jpeg")) return "image/jpeg";
  if (clean.endsWith(".webp")) return "image/webp";
  if (clean.endsWith(".svg")) return "image/svg+xml";
  return OG_IMAGE_TYPE;
}

export function buildOgImage(alt: string, imageUrl = OG_IMAGE_URL) {
  return {
    url: imageUrl,
    secureUrl: imageUrl,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt,
    type: guessImageType(imageUrl),
  };
}

export function buildSiteMetadata(
  seo: SeoCopy,
  locale: string,
  path = `/${locale}`,
): Metadata {
  const pageUrl = `${SITE_URL}${path}`;
  const ogLocale = locale === "te" ? "te_IN" : "en_IN";
  const keywords = seo.keywords
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
  const ogImage = buildOgImage(seo.ogImageAlt);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seo.title,
      template: `%s | ${BRAND_NAME}`,
    },
    description: seo.description,
    keywords,
    authors: [{ name: BRAND_FULL_NAME, url: SITE_URL }],
    creator: BRAND_FULL_NAME,
    publisher: "Venkateswara Products",
    category: "food",
    applicationName: BRAND_FULL_NAME,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: true,
    },
    alternates: {
      canonical: path,
      languages: {
        en: "/en",
        te: "/te",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: locale === "te" ? ["en_IN"] : ["te_IN"],
      url: pageUrl,
      siteName: seo.siteName,
      title: seo.ogTitle,
      description: seo.ogDescription,
      determiner: "the",
      images: [ogImage],
      phoneNumbers: [PHONE_TEL],
      countryName: "India",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle,
      description: seo.twitterDescription,
      images: [
        {
          url: OG_IMAGE_URL,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: seo.ogImageAlt,
        },
      ],
      creator: "@artraditional",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/logo.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
      capable: true,
      title: BRAND_NAME,
      statusBarStyle: "default",
    },
    other: {
      "og:image": OG_IMAGE_URL,
      "og:image:secure_url": OG_IMAGE_URL,
      "og:image:type": OG_IMAGE_TYPE,
      "og:image:width": String(OG_IMAGE_WIDTH),
      "og:image:height": String(OG_IMAGE_HEIGHT),
      "og:image:alt": seo.ogImageAlt,
      "twitter:image": OG_IMAGE_URL,
      "twitter:image:alt": seo.ogImageAlt,
      "theme-color": "#800020",
      "msapplication-TileColor": "#800020",
      "geo.region": "IN-AP",
      "geo.placename": "Atreyapuram",
      contact: PHONE_DISPLAY,
      telephone: PHONE_DISPLAY,
    },
  };
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  imageUrl,
  imageAlt,
  noIndex = false,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  noIndex?: boolean;
}): Metadata {
  const pageUrl = `${SITE_URL}${path}`;
  const ogLocale = locale === "te" ? "te_IN" : "en_IN";
  const alt = imageAlt || title;
  const image = buildOgImage(alt, imageUrl || OG_IMAGE_URL);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        en: path.replace(`/${locale}`, "/en"),
        te: path.replace(`/${locale}`, "/te"),
        "x-default": path.replace(`/${locale}`, "/en"),
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: pageUrl,
      siteName: BRAND_FULL_NAME,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image.url,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt,
        },
      ],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    other: {
      "og:image": image.url,
      "og:image:secure_url": image.secureUrl,
      "og:image:type": image.type,
      "og:image:width": String(image.width),
      "og:image:height": String(image.height),
      "og:image:alt": alt,
      "twitter:image": image.url,
    },
  };
}
