import * as React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
  subPage?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, subPage = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Navigation subPage={subPage} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
