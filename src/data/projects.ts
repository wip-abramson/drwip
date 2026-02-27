import type { Project } from "../types"

export const projects: Project[] = [
  {
    title: "did:btcr2 Python Reference Implementation",
    description:
      "A reference implementation of the BTCR2 DID method specification supporting create, read, update, and deactivate operations, with a conformant HTTPS-based DID resolver.",
    github: "https://github.com/wip-abramson/did-btcr2-py",
    status: "active",
  },
  {
    title: "Identity and Interaction Exhibition",
    description:
      "A playful virtual exhibition presenting abstract conceptual renderings of social reality. Built using Scaffold-ETH and NFT-based artifacts, it explores ideas around autonomous worlds, digital presence, and mediated interaction.",
    url: "https://iiexhibition.studio",
    status: "active",
  },
  {
    title: "Tree Appreciation",
    description:
      "A place-based experiment exploring memory, stewardship, and verifiable interaction with physical environments, investigating how digital systems can support shared presence and ecological connection.",
    url: "https://treeappreciation.com",
    github: "https://github.com/wip-abramson/tree-appreciation-atproto",
    status: "active",
  },
  {
    title: "Scottish Healthcare Ecosystem PoC",
    description:
      "Prototype exploring decentralized identity and verifiable credential workflows across healthcare institutions, demonstrating interoperable trust relationships and secure data exchange.",
    github: "https://github.com/blockpass-identity-lab/scottish-healthcare-ecosystem-poc",
    status: "completed",
  },
]
