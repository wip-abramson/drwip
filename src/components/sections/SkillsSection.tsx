import * as React from "react"
import Section from "../Section"
import { skillGroups } from "../../data/skills"

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" number="02" title="Expertise">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="border border-brand-border p-6 sm:p-8"
          >
            <h3 className="font-heading text-xl text-brand-text mb-3">
              {group.category}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              {group.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default SkillsSection
