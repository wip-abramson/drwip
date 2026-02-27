import type { GatsbyNode, SourceNodesArgs, CreateSchemaCustomizationArgs } from "gatsby"
import { SEMANTIC_SCHOLAR_AUTHOR_ID } from "./src/config"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions
  createTypes(`
    type Publication implements Node {
      paperId: String!
      title: String!
      year: Int
      venue: String
      authors: [String!]!
      citationCount: Int!
      openAccessPdf: String
      externalIds: JSON
      publicationTypes: [String!]!
    }
  `)
}

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}: SourceNodesArgs) => {
  const { createNode } = actions

  if (!SEMANTIC_SCHOLAR_AUTHOR_ID) {
    reporter.warn(
      "[Publications] No SEMANTIC_SCHOLAR_AUTHOR_ID set in src/config.ts — skipping publication fetch."
    )
    return
  }

  const url = `https://api.semanticscholar.org/graph/v1/author/${SEMANTIC_SCHOLAR_AUTHOR_ID}/papers?fields=title,year,authors,venue,externalIds,citationCount,publicationTypes,openAccessPdf&limit=100`

  try {
    reporter.info(`[Publications] Fetching papers from Semantic Scholar for author ${SEMANTIC_SCHOLAR_AUTHOR_ID}`)
    const response = await fetch(url)

    if (!response.ok) {
      reporter.warn(
        `[Publications] Semantic Scholar API returned ${response.status} — skipping publication fetch.`
      )
      return
    }

    const json = (await response.json()) as {
      data: Array<{
        paperId: string
        title: string
        year?: number
        venue?: string
        authors?: Array<{ name: string }>
        citationCount?: number
        openAccessPdf?: { url: string }
        externalIds?: Record<string, string>
        publicationTypes?: string[]
      }>
    }

    const papers = json.data ?? []
    reporter.info(`[Publications] Found ${papers.length} papers.`)

    for (const paper of papers) {
      const nodeData = {
        paperId: paper.paperId,
        title: paper.title,
        year: paper.year ?? null,
        venue: paper.venue ?? null,
        authors: (paper.authors ?? []).map((a) => a.name),
        citationCount: paper.citationCount ?? 0,
        openAccessPdf: paper.openAccessPdf?.url ?? null,
        externalIds: paper.externalIds ?? {},
        publicationTypes: paper.publicationTypes ?? [],
      }

      createNode({
        ...nodeData,
        id: createNodeId(`Publication-${paper.paperId}`),
        internal: {
          type: "Publication",
          contentDigest: createContentDigest(nodeData),
        },
      })
    }
  } catch (err) {
    reporter.warn(`[Publications] Failed to fetch from Semantic Scholar: ${err}`)
  }
}
