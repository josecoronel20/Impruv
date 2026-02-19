import type React from "react"

interface SchemaMarkupProps {
  schema: Record<string, unknown>
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Schema para organización/empresa
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "impruv Marketing",
    url: "https://impruv.com",
    logo: "https://impruv.com/images/logo.png",
    description:
      "Agencia de Marketing Digital especializada en Google Ads y diseño web orientado a conversión.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
    sameAs: [
      // Agregar redes sociales cuando las tengas
      // "https://www.linkedin.com/company/impruv",
      // "https://www.facebook.com/impruv",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
  }

  return <SchemaMarkup schema={schema} />
}

// Schema para servicio profesional
export function ProfessionalServiceSchema({
  serviceType,
  description,
  areaServed = "Argentina",
}: {
  serviceType: string
  description: string
  areaServed?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `impruv Marketing - ${serviceType}`,
    description,
    provider: {
      "@type": "Organization",
      name: "impruv Marketing",
      url: "https://impruv.com",
    },
    areaServed: {
      "@type": "Country",
      name: areaServed,
    },
    serviceType,
  }

  return <SchemaMarkup schema={schema} />
}

// Schema para sitio web
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "impruv Marketing",
    url: "https://impruv.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://impruv.com/buscar?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return <SchemaMarkup schema={schema} />
}
