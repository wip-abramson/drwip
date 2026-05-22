import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Will Abramson — drwip.com`,
    description: `Researcher & Engineer at the intersection of identity, privacy, and decentralised systems.`,
    siteUrl: `https://drwip.com`,
    author: `Will Abramson`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    // Emits /sitemap-index.xml (+ child sitemaps) listing every built page.
    "gatsby-plugin-sitemap",
    // Emits /robots.txt that allows all crawlers and points at the sitemap.
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://drwip.com",
        sitemap: "https://drwip.com/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}

export default config
