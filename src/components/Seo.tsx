import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  /** Page title. Falls back to the site title. */
  title?: string
  /** Meta description. Falls back to the site description. */
  description?: string
  /** Route path, e.g. `/publications` — used for the canonical URL. */
  pathname?: string
  /** Extra <head> nodes, e.g. JSON-LD <script> tags. */
  children?: React.ReactNode
}

/**
 * Everything that belongs in <head> for SEO: title, description,
 * canonical URL, Open Graph / Twitter cards, and rel="me" identity links.
 *
 * Rendered inside a page's `Head` export (Gatsby Head API).
 */
const Seo: React.FC<SeoProps> = ({ title, description, pathname, children }) => {
  const { site } = useStaticQuery(graphql`
    query SeoMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const seo = {
    title: title ?? meta.title,
    description: description ?? meta.description,
    url: `${meta.siteUrl}${pathname ?? "/"}`,
    image: `${meta.siteUrl}/og-image.png`,
  }

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={meta.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="drwip.com" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* rel="me": ties these profiles to one identity for search engines. */}
      <link rel="me" href="https://github.com/wip-abramson" />
      <link rel="me" href="https://www.linkedin.com/in/wip-abramson/" />
      <link
        rel="me"
        href="https://scholar.google.com/citations?user=KBU1owsAAAAJ&hl=en"
      />
      <link rel="me" href="https://blog.drwip.com" />

      {children}
    </>
  )
}

export default Seo
