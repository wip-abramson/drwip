import * as React from "react"
import type { ExperienceEntry } from "../../types"

interface TimelineEntryProps {
  entry: ExperienceEntry
  isLast?: boolean
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ entry, isLast = false }) => {
  return (
    <div className="flex gap-6">
      {/* Timeline indicator */}
      <div className="flex flex-col items-center pt-1">
        <div className="w-2 h-2 rounded-full bg-brand-accent shrink-0 mt-1" />
        {!isLast && <div className="w-px flex-1 bg-brand-border mt-2" />}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <h3 className="font-heading text-lg text-brand-text">{entry.role}</h3>
          <span className="font-mono text-xs text-brand-muted shrink-0">{entry.period}</span>
        </div>
        {entry.url ? (
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-accent hover:underline mb-3 inline-block"
          >
            {entry.organisation}
          </a>
        ) : (
          <p className="text-sm text-brand-muted mb-3">{entry.organisation}</p>
        )}
        <p className="text-brand-text text-sm leading-relaxed mb-4">{entry.description}</p>
        <ul className="space-y-1.5">
          {entry.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
              <span className="text-brand-accent mt-0.5 shrink-0">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TimelineEntry
