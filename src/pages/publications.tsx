import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout"
import PublicationCard from "../components/ui/PublicationCard"
import Seo from "../components/Seo"
import type { Publication } from "../types"

interface QueryResult {
  allPublication: {
    nodes: Array<{
      paperId: string
      title: string
      year: number | null
      venue: string | null
      authors: string[]
      citationCount: number
      openAccessPdf: string | null
      externalIds: Record<string, string>
      publicationTypes: string[]
    }>
  }
}

const PublicationsPage: React.FC<PageProps<QueryResult>> = ({ data }) => {
  const publications: Publication[] = data.allPublication.nodes

  return (
    <Layout subPage>
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h1 className="font-heading text-3xl text-brand-text mb-3">
          Publications
        </h1>
        <p className="text-brand-muted text-sm mb-12">
          Research papers, reports, and technical contributions.
        </p>

        {publications.length === 0 ? (
          <p className="text-brand-muted text-sm">
            No publications loaded yet. Set{" "}
            <code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border">
              SEMANTIC_SCHOLAR_AUTHOR_ID
            </code>{" "}
            in{" "}
            <code className="font-mono text-xs bg-brand-surface px-1.5 py-0.5 rounded border border-brand-border">
              src/config.ts
            </code>{" "}
            and restart the dev server to fetch publications automatically.
          </p>
        ) : (
          <div className="space-y-6">
            {publications.map((pub) => (
              <PublicationCard key={pub.paperId} publication={pub} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default PublicationsPage

export const Head: HeadFC = () => (
  <Seo
    title="Publications — Will Abramson"
    description="Peer-reviewed research papers and technical publications by Will Abramson on decentralized identity, verifiable credentials, and cryptography."
    pathname="/publications"
  />
)

export const query = graphql`
  query PublicationsPageQuery {
    allPublication(sort: { citationCount: DESC }) {
      nodes {
        paperId
        title
        year
        venue
        authors
        citationCount
        openAccessPdf
        externalIds
        publicationTypes
      }
    }
  }
`
