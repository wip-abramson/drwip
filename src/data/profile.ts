import type { Profile } from "../types"

export const profile: Profile = {
  name: "Will Abramson",
  tagline: "Building cryptographic systems for identity, coordination, and trust.",
  bio: [
    "I design infrastructure for trust in a networked world.",
    "As a senior engineer and standards leader, I work on decentralized identity, cryptography, and interoperable systems that enable secure coordination without centralized control. My work spans decentralized identifiers, verifiable credentials and open cryptographic protocols.",
    "I build production systems and prototypes to test assumptions, validate architectures and bring new trust infrastructure to life.",
    "I am particularly interested in how these technologies enable trust, coordination, and shared memory in an increasingly autonomous digital society.",
  ],
  location: "London, UK",
  currentRoles: [
    {
      role: "Senior Engineer",
      organisation: "Legendary Requirements",
      url: "https://legreq.com",
    },
    {
      role: "Chair, DID Working Group",
      organisation: "W3C",
      url: "https://www.w3.org/groups/wg/did/",
    },
    {
      role: "Chair, Credentials Community Group",
      organisation: "W3C",
      url: "https://www.w3.org/groups/cg/credentials/",
    },
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/wip-abramson", handle: "wip-abramson" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/wip-abramson/", handle: "wip-abramson" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=KBU1owsAAAAJ&hl=en", handle: "Google Scholar" },
    { label: "Email", url: "mailto:hello@drwip.com", handle: "hello@drwip.com" },
  ],
}
