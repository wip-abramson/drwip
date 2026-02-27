import * as React from "react"
import Section from "../Section"
import TimelineEntry from "../ui/TimelineEntry"
import { experience } from "../../data/experience"

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" number="03" title="Experience">
      <div>
        {experience.map((entry, i) => (
          <TimelineEntry
            key={`${entry.organisation}-${entry.period}`}
            entry={entry}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}

export default ExperienceSection
