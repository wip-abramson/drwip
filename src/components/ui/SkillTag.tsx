import * as React from "react"

interface SkillTagProps {
  label: string
  variant?: "default" | "accent"
}

const SkillTag: React.FC<SkillTagProps> = ({ label, variant = "default" }) => {
  const base =
    "inline-block font-mono text-xs px-2.5 py-1 rounded border leading-none"
  const styles =
    variant === "accent"
      ? "border-brand-accent text-brand-accent bg-transparent"
      : "border-brand-border text-brand-muted bg-brand-surface"

  return <span className={`${base} ${styles}`}>{label}</span>
}

export default SkillTag
