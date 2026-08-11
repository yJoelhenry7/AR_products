export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://artraditionalfoods.com",
    "name": "AR Traditional Foods",
    "alternateName": "AR Traditional",
    "description": "Authentic Atreyapuram Pootharekulu and traditional Andhra sweets. Worldwide door delivery. Handcrafted with love using traditional recipes.",
    "url": "https://artraditionalfoods.com",
    "telephone": "+918500904835",
    "email": "venkateswara.foods@gmail.com",
    "image": "https://artraditionalfoods.com/logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://artraditionalfoods.com/logo.png",
      "width": "512",
      "height": "512"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atreyapuram",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "16.5",
      "longitude": "81.5"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₹349 - ₹599",
    "servesCuisine": "Indian",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "currenciesAccepted": "INR",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "founder": {
      "@type": "Person",
      "name": "V Ashok Kumar"
    },
    "sameAs": [
      "https://www.instagram.com/venkateswara.traditional.foods",
      "https://youtube.com/@atreyapuramputharekulu4835",
      "https://wa.me/918500904835"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918500904835",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Telugu", "Hindi"],
      "areaServed": "Worldwide"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "349",
      "highPrice": "599",
      "offerCount": "10"
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://artraditionalfoods.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://artraditionalfoods.com/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://artraditionalfoods.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://artraditionalfoods.com/#contact"
      }
    ]
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Atreyapuram Pootharekulu",
    "description": "Authentic paper-thin rice wafers with jaggery and ghee, a traditional Andhra Pradesh delicacy",
    "image": "https://artraditionalfoods.com/products/pootharekulu.png",
    "brand": {
      "@type": "Brand",
      "name": "AR Traditional Foods"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://artraditionalfoods.com/#products",
      "priceCurrency": "INR",
      "price": "349",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AR Traditional Foods"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
    </>
  );
}
