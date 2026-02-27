import * as React from "react"
import Section from "../Section"
import { profile } from "../../data/profile"

const ContactSection: React.FC = () => {
  const email = profile.socials.find((s) => s.label === "Email")

  return (
    <Section id="contact" number="05" title="Contact">
      <div className="max-w-[560px]">
        <p className="text-brand-text leading-relaxed mb-8">
          I’m always interested in conversations about decentralized identity, trust infrastructure, and systems that enable secure coordination.
        </p>
        <p className="text-brand-text leading-relaxed mb-8">
          If you’re working in this space — or exploring adjacent ideas — I’d be glad to connect.
        </p>
        {email && (
          <a
            href={email.url}
            className="inline-flex items-center gap-2 font-mono text-sm text-brand-accent border border-brand-accent px-4 py-2 rounded hover:bg-brand-accent hover:text-white transition-colors duration-200"
          >
            {email.handle}
          </a>
        )}
        <div className="mt-10 flex flex-wrap gap-6">
          {profile.socials
            .filter((s) => s.label !== "Email")
            .map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-0.5"
              >
                <span className="font-mono text-xs text-brand-muted">{social.label}</span>
                <span className="text-sm text-brand-accent hover:underline">
                  {social.handle ?? social.label}
                </span>
              </a>
            ))}
        </div>
      </div>
    </Section>
  )
}

export default ContactSection
