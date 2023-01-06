import { Link } from "gatsby"
import React from "react"
import SEO from "@wkocjan/gatsby-theme-intro/src/components/seo/seo"
import "@wkocjan/gatsby-theme-intro/src/styles/style.css"

const Publications = () => (
  <>
    <SEO title="Publications" />
    <div className="flex min-h-screen items-center justify-center text-gray-900">
      <div className="py-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Publications
        </h2>
        <p>This is the publications page.</p>
        <Link to="/" className="inline-block mt-8 underline">
          &laquo; Go back to the site
        </Link>
      </div>
    </div>
  </>
)

export default Publications
