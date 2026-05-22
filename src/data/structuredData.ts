/**
 * JSON-LD structured data. Helps search engines and AI systems resolve
 * "Will Abramson" to a single person entity linked across the web.
 */

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://drwip.com/#person",
  name: "Will Abramson",
  alternateName: "Dr Wip",
  url: "https://drwip.com",
  image: "https://drwip.com/will-abramson.jpg",
  jobTitle: "Senior Engineer",
  description:
    "Researcher and engineer building cryptographic systems for identity, coordination, and trust.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Legendary Requirements",
      url: "https://legreq.com",
    },
    { "@type": "Organization", name: "W3C", url: "https://www.w3.org/" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  knowsAbout: [
    "Decentralized identity",
    "Verifiable credentials",
    "Decentralized identifiers",
    "Cryptography",
    "Trust infrastructure",
    "Privacy",
  ],
  sameAs: [
    "https://github.com/wip-abramson",
    "https://www.linkedin.com/in/wip-abramson/",
    "https://scholar.google.com/citations?user=KBU1owsAAAAJ&hl=en",
    "https://blog.drwip.com",
    "https://www.w3.org/groups/wg/did/",
  ],
}
