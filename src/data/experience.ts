import type { ExperienceEntry } from "../types"

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Engineer",
    organisation: "Legendary Requirements",
    url: "https://legreq.com",
    period: "2021 — Present",
    description:
      "Work on decentralized identity infrastructure, cryptographic protocols, and open standards enabling interoperable trust systems.",
    highlights: [
      "Led the design and specification of a Bitcoin-anchored DID method, did:btcr2, including reference implementation and test vectors",
      "Developed the DID Resolution test suite for the W3C DIDWG and produced a conformant DID Resolver implementation",
      "Developed the diddirectory.com, a public directory of DID methods with automated ingestion, search, and maintenance workflows",
      "Translated complex client requirements into implementable architectures, improving delivery alignment and reducing rework",
    ],
  },
  {
    role: "Chair",
    organisation: "W3C Decentralized Identifier Working Group",
    url: "https://www.w3.org/groups/wg/did/",
    period: "2024 — Present",
    description:
      "Facilitate global collaboration to advance decentralized identity standards toward W3C Recommendation.",
    highlights: [
      "Build consensus across implementers on privacy, security, and interoperability trade-offs",
      "Support editorial development of the specification, reviewing technical proposals and contributing to specification text",
    ],
  },
  {
    role: "Security & Identity Lead",
    organisation: "OpenMined",
    url: "https://openmined.org",
    period: "2020 — 2021",
    description:
      "Worked on the intersection of decentralized identity and privacy-preserving machine learning.",
    highlights: [
      "Built a PySyft plugin enabling federated learning connections secured with DIDs and verifiable credentials",
      "Developed experimental tooling demonstrating Hyperledger Aries agent orchestration workflows",
      "Produced course material on Public Key Infrastructure for the Foundations of Private Computation curriculum"
    ],
  },
  {
    role: "Software Engineer",
    organisation: "Truu ID",
    url: "https://truu.id",
    period: "2019 — 2020",
    description:
      "Delivered full-stack components supporting secure digital credentialing for healthcare professionals as part of the NHS Staff Passport pilot.",
    highlights: [
    ],
  },
    {
    role: "Software Engineer",
    organisation: "Lhasa Limited",
    url: "https://www.lhasalimited.org/",
    period: "2019",
    description:
      "Developed features for scientific software used to support regulatory chemical toxicity assessment and safety decision-making.",
    highlights: [
    ],
  }
]
