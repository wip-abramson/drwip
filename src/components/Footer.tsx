import * as React from "react"
import { profile } from "../data/profile"

// Blog first, then real profiles. rel="me" on each link reinforces that
// these all belong to one identity — the visible counterpart to the
// rel="me" <link> tags in <head>.
const footerLinks = [
  { label: "Blog", url: "https://blog.drwip.com" },
  ...profile.socials
    .filter((s) => s.label !== "Email")
    .map((s) => ({ label: s.label, url: s.url })),
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-brand-border py-8 px-6">
      <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-brand-muted">
        <span>© {year} Will Abramson</span>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="me noopener noreferrer"
              className="font-mono text-xs hover:text-brand-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
