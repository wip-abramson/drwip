import * as React from "react"
import type { Publication } from "../../types"

interface PublicationCardProps {
  publication: Publication
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const doi = publication.externalIds?.DOI
  const doiUrl = doi ? `https://doi.org/${doi}` : null
  const pdfUrl = publication.openAccessPdf

  const href = doiUrl ?? pdfUrl ?? null

  const authorList =
    publication.authors.length > 5
      ? [...publication.authors.slice(0, 4), "et al."].join(", ")
      : publication.authors.join(", ")

  return (
    <div className="border-b border-brand-border pb-6 last:border-0">
      <div className="flex items-start justify-between gap-4 mb-1">
        <div>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-base text-brand-text hover:text-brand-accent transition-colors duration-150 leading-snug"
            >
              {publication.title}
            </a>
          ) : (
            <span className="font-heading text-base text-brand-text leading-snug">
              {publication.title}
            </span>
          )}
        </div>
        {publication.citationCount > 0 && (
          <span className="font-mono text-xs text-brand-muted shrink-0 mt-0.5">
            {publication.citationCount} citations
          </span>
        )}
      </div>
      <p className="text-sm text-brand-muted mb-1">{authorList}</p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-brand-muted">
        {publication.venue && <span>{publication.venue}</span>}
        {publication.year && (
          <>
            {publication.venue && <span>·</span>}
            <span>{publication.year}</span>
          </>
        )}
        {pdfUrl && (
          <>
            <span>·</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline"
            >
              PDF
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default PublicationCard
