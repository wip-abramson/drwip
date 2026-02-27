import * as React from "react"

interface SectionProps {
  id: string
  number: string
  title: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, number, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span
            className="font-mono text-sm text-brand-muted select-none"
            aria-hidden="true"
          >
            {number}
          </span>
          <h2 className="font-heading text-2xl text-brand-text">{title}</h2>
          <div className="flex-1 h-px bg-brand-border" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section
