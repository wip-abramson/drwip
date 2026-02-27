import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col justify-center px-6 py-24">
        <div className="max-w-[900px] mx-auto">
          <p className="font-mono text-sm text-brand-muted mb-4">404</p>
          <h1 className="font-heading text-4xl text-brand-text mb-6">Page not found</h1>
          <p className="text-brand-muted max-w-[400px] leading-relaxed mb-8">
            This page doesn't exist. You may have followed a broken link or mistyped the URL.
          </p>
          <Link
            to="/"
            className="font-mono text-sm text-brand-accent hover:underline inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found — drwip.com</title>
