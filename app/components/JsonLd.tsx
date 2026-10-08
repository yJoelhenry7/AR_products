import {
  BRAND_FULL_NAME,
  BRAND_NAME,
  OG_IMAGE_URL,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "../utils/brand";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: BRAND_FULL_NAME,
    alternateName: [BRAND_NAME, "Venkateswara Products", "AR Traditional Foods"],
    description:
      "Authentic Atreyapuram Pootharekulu and traditional Andhra sweets. Worldwide door delivery. Handcrafted with love using traditional recipes.",
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: "venkateswara.foods@gmail.com",
    image: [OG_IMAGE_URL, `${SITE_URL}/logo.png`],
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: "512",
      height: "512",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Atreyapuram",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.5",
      longitude: "81.5",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "₹250 - ₹500",
    servesCuisine: "Indian",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    currenciesAccepted: "INR",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    founder: {
      "@type": "Person",
      name: "V Ashok Kumar",
    },
    sameAs: [
      "https://www.instagram.com/venkateswara.traditional.foods",
      "https://youtube.com/@atreyapuramputharekulu4835",
      `https://wa.me/${WHATSAPP_NUMBER}`,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_TEL,
      contactType: "Customer Service",
      availableLanguage: ["English", "Telugu", "Hindi"],
      areaServed: "Worldwide",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "250",
      highPrice: "500",
      offerCount: "20",
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: `${SITE_URL}/#about`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${SITE_URL}/#contact`,
      },
    ],
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Atreyapuram Pootharekulu",
    description:
      "Authentic paper-thin rice wafers with jaggery and ghee, a traditional Andhra Pradesh delicacy",
    image: OG_IMAGE_URL,
    brand: {
      "@type": "Brand",
      name: BRAND_FULL_NAME,
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#products`,
      priceCurrency: "INR",
      price: "300",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: BRAND_FULL_NAME,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
    </>
  );
}
