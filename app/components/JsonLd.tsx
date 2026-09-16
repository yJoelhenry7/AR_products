export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.venkateswaraproducts.com",
    "name": "AR Products by Venkateswara Products",
    "alternateName": ["AR Products", "Venkateswara Products"],
    "description": "Authentic Atreyapuram Pootharekulu and traditional Andhra sweets. Worldwide door delivery. Handcrafted with love using traditional recipes.",
    "url": "https://www.venkateswaraproducts.com",
    "telephone": "+918500904835",
    "email": "venkateswara.foods@gmail.com",
    "image": "https://www.venkateswaraproducts.com/logo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.venkateswaraproducts.com/logo.png",
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
        "item": "https://www.venkateswaraproducts.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.venkateswaraproducts.com/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://www.venkateswaraproducts.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.venkateswaraproducts.com/#contact"
      }
    ]
  };

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Atreyapuram Pootharekulu",
    "description": "Authentic paper-thin rice wafers with jaggery and ghee, a traditional Andhra Pradesh delicacy",
    "image": "https://www.venkateswaraproducts.com/products/pootharekulu.png",
    "brand": {
      "@type": "Brand",
      "name": "AR Products by Venkateswara Products"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.venkateswaraproducts.com/#products",
      "priceCurrency": "INR",
      "price": "349",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AR Products by Venkateswara Products"
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
