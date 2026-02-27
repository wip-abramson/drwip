import * as React from "react"
import SkillTag from "./SkillTag"
import type { WritingEntry } from "../../types"

const statusLabel: Record<WritingEntry["status"], string> = {
  published: "Published",
  draft: "Draft",
  "coming-soon": "Coming Soon",
}

const statusStyle: Record<WritingEntry["status"], string> = {
  published: "text-green-700 bg-green-50 border-green-200",
  draft: "text-amber-700 bg-amber-50 border-amber-200",
  "coming-soon": "text-brand-muted bg-brand-surface border-brand-border",
}

interface WritingCardProps {
  entry: WritingEntry
}

const WritingCard: React.FC<WritingCardProps> = ({ entry }) => {
  const content = (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-6 flex flex-col gap-3 hover:border-brand-accent transition-colors duration-200">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-base text-brand-text leading-snug">{entry.title}</h3>
        <span
          className={`font-mono text-xs px-2 py-0.5 rounded border shrink-0 ${statusStyle[entry.status]}`}
        >
          {statusLabel[entry.status]}
        </span>
      </div>
      <p className="text-sm text-brand-muted leading-relaxed">{entry.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <SkillTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  )

  if (entry.url && entry.status === "published") {
    return (
      <a href={entry.url} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}

export default WritingCard
