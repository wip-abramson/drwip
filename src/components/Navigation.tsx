import * as React from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/publications/", label: "Publications", external: true },
]

interface NavigationProps {
  subPage?: boolean
}

const Navigation: React.FC<NavigationProps> = ({ subPage = false }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const resolveHref = (href: string) => {
    if (subPage && href.startsWith("#")) return `/${href}`
    return href
  }

  const logoHref = subPage ? "/" : "#hero"

  return (
    <nav className="sticky top-0 z-50 bg-brand-bg border-b border-brand-border">
      <div className="max-w-[900px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / name */}
        <a
          href={logoHref}
          className="font-mono text-sm text-brand-text hover:text-brand-accent transition-colors"
        >
          Will Abramson
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className="inline-flex items-center gap-1 text-sm text-brand-muted hover:text-brand-accent transition-colors"
            >
              {link.label}
              {link.external && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-muted hover:text-brand-text"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg">
          <ul className="max-w-[900px] mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={resolveHref(link.href)}
                  className="inline-flex items-center gap-1 text-sm text-brand-muted hover:text-brand-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  {link.external && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navigation
