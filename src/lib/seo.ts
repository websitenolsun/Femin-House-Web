export const siteUrl = "https://www.femnhouse.com";

export const seoBusiness = {
  name: "Fem'n House",
  expertName: "Fzt. Sena ER",
  siteUrl,
  phoneDisplay: "+90 530 225 09 97",
  phoneSchema: "+905302250997",
  whatsappUrl: "https://wa.me/905302250997",
  instagramUrl: "https://www.instagram.com/feminhouse/",
  mapUrl: "https://maps.app.goo.gl/pSkdCGetfLMqPdGn7",
  addressText:
    "Adnan Kahveci Mahallesi Alemdağ Caddesi Centro A Blok No:33, 34528 Beylikdüzü/İstanbul",
  address: {
    streetAddress: "Adnan Kahveci Mahallesi Alemdağ Caddesi Centro A Blok No:33",
    addressLocality: "Beylikdüzü",
    addressRegion: "İstanbul",
    postalCode: "34528",
    addressCountry: "TR",
  },
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-14:00"],
  openingHoursDisplay: ["Pazartesi-Cuma 09:00-20:00", "Cumartesi 09:00-14:00", "Pazar Kapalı"],
  areaServed: "Beylikdüzü, İstanbul",
  ids: {
    localBusiness: `${siteUrl}/#localbusiness`,
    organization: `${siteUrl}/#organization`,
    person: `${siteUrl}/#person-sena-er`,
    website: `${siteUrl}/#website`,
  },
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function canonicalLink(path = "/") {
  return {
    rel: "canonical",
    href: absoluteUrl(path),
  };
}

export function jsonLdScript(schema: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(schema),
  };
}

const addressSchema = {
  "@type": "PostalAddress",
  ...seoBusiness.address,
};

const serviceNames = [
  "Klinik Pilates",
  "Manuel Terapi",
  "Hamile Pilatesi",
  "Fizyoterapi Danışmanlığı",
  "Reformer Pilates",
];

function serviceId(name: string) {
  return `${siteUrl}/#service-${name
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")}`;
}

export function globalStructuredData() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": seoBusiness.ids.localBusiness,
        name: seoBusiness.name,
        url: siteUrl,
        telephone: seoBusiness.phoneSchema,
        address: addressSchema,
        openingHours: seoBusiness.openingHours,
        hasMap: seoBusiness.mapUrl,
        sameAs: [seoBusiness.instagramUrl],
        areaServed: {
          "@type": "Place",
          name: seoBusiness.areaServed,
        },
      },
      {
        "@type": "Organization",
        "@id": seoBusiness.ids.organization,
        name: seoBusiness.name,
        url: siteUrl,
        telephone: seoBusiness.phoneSchema,
        address: addressSchema,
        sameAs: [seoBusiness.instagramUrl],
      },
      {
        "@type": "Person",
        "@id": seoBusiness.ids.person,
        name: seoBusiness.expertName,
        jobTitle: "Fizyoterapist",
        worksFor: {
          "@id": seoBusiness.ids.organization,
        },
        knowsAbout: [
          "Fizyoterapi",
          "Klinik Pilates",
          "Manuel Terapi",
          "Hamile Pilatesi",
          "Reformer Pilates",
        ],
      },
      {
        "@type": "WebSite",
        "@id": seoBusiness.ids.website,
        name: seoBusiness.name,
        url: siteUrl,
        publisher: {
          "@id": seoBusiness.ids.organization,
        },
      },
      ...serviceNames.map((name) => ({
        "@type": "Service",
        "@id": serviceId(name),
        name,
        provider: {
          "@id": seoBusiness.ids.organization,
        },
        areaServed: {
          "@type": "Place",
          name: seoBusiness.areaServed,
        },
      })),
    ],
  });
}

export function webPageSchema(path: string, name: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      "@id": seoBusiness.ids.website,
    },
    about: {
      "@id": seoBusiness.ids.localBusiness,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function pageStructuredData(options: {
  path: string;
  name: string;
  description?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}) {
  const scripts = [jsonLdScript(webPageSchema(options.path, options.name, options.description))];

  if (options.breadcrumbs?.length) {
    scripts.push(jsonLdScript(breadcrumbSchema(options.breadcrumbs)));
  }

  return scripts;
}
