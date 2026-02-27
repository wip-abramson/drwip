import * as React from "react"
import { profile } from "../../data/profile"

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center px-6 py-24"
    >
      <div className="max-w-[900px] mx-auto">
        <p className="font-mono text-sm text-brand-muted mb-4 tracking-wide">
          {profile.location}
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-brand-text leading-tight mb-6">
          {profile.name}
        </h1>
        <p className="text-lg sm:text-xl text-brand-muted max-w-[600px] leading-relaxed mb-8">
          {profile.tagline}
        </p>
        <div className="mb-10">
          <span className="font-mono text-xs text-brand-muted uppercase tracking-widest block mb-3">
            Currently
          </span>
          <div className="space-y-2">
            {profile.currentRoles.map((r) => (
              <a
                key={r.role}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm group w-fit"
              >
                <span className="text-brand-text group-hover:text-brand-accent transition-colors">
                  {r.role}
                </span>
                <span className="text-brand-border">·</span>
                <span className="text-brand-muted group-hover:text-brand-accent transition-colors">
                  {r.organisation}
                </span>
                <span className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="font-mono text-sm text-brand-accent hover:underline"
            >
              {social.label}
            </a>
          ))}
        </div>
        <div className="mt-16">
          <a
            href="#about"
            className="font-mono text-sm text-brand-muted hover:text-brand-accent transition-colors inline-flex items-center gap-2"
            aria-label="Scroll to About section"
          >
            <span>Scroll</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
