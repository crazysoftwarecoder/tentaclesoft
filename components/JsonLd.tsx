export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Tentacle Software",
    description:
      "Elite software consulting. High-performance web platforms, cloud-native APIs, AI automation, and engineering team coaching.",
    url: "https://tentaclesoftware.com",
    logo: "https://tentaclesoftware.com/icon.svg",
    image: "https://tentaclesoftware.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -33.8688,
        longitude: 151.2093,
      },
      geoRadius: "50000",
    },
    serviceType: [
      "Custom Software Development",
      "Web Platform Development",
      "Cloud-Native API Design",
      "Engineering Team Coaching",
      "AI Automation Consulting",
      "Developer Productivity Consulting",
    ],
    priceRange: "$$$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Consulting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Performance Web Platform Development",
            description:
              "Building large-scale, high-performance web platforms designed for speed and millions of users.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud-Native API Backend Design",
            description:
              "Designing and optimising scalable, secure cloud-native API backends.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Engineering Team Coaching",
            description:
              "Coaching and scaling high-performing engineering teams for maximum delivery.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Agentic Automation Systems",
            description:
              "Crafting agentic and AI-driven automation systems for business processes.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
