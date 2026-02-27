import * as React from "react"

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-brand-border py-8 px-6">
      <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-brand-muted">
        <span>© {year} Will Abramson</span>
        <span className="font-mono text-xs">drwip.com</span>
      </div>
    </footer>
  )
}

export default Footer
