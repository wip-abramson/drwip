import * as React from "react"
import Section from "../Section"
import { profile } from "../../data/profile"

const AboutSection: React.FC = () => {
  return (
    <Section id="about" number="01" title="About">
      <div className="max-w-[640px] space-y-4">
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="text-brand-text leading-relaxed">
            {paragraph}
          </p>
        ))}
        <p className="text-brand-text leading-relaxed">
          I think aloud at{" "}
          <a
            href="https://blog.drwip.com"
            className="text-brand-accent hover:underline"
          >
            blog.drwip.com
          </a>
          .
        </p>
      </div>
    </Section>
  )
}

export default AboutSection
