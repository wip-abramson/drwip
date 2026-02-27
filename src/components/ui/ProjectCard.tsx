import * as React from "react"
import type { Project } from "../../types"

const statusLabel: Record<Project["status"], string> = {
  active: "Active",
  completed: "Completed",
  archived: "Archived",
}

const statusStyle: Record<Project["status"], string> = {
  active: "text-brand-accent bg-brand-surface border-brand-accent/30",
  completed: "text-brand-muted bg-brand-surface border-brand-border",
  archived: "text-brand-muted bg-brand-surface border-brand-border",
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-6 flex flex-col gap-4 hover:border-brand-accent transition-colors duration-200">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-lg text-brand-text">{project.title}</h3>
        <span
          className={`font-mono text-xs px-2 py-0.5 rounded border shrink-0 ${statusStyle[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>

      <p className="text-sm text-brand-muted leading-relaxed">{project.description}</p>

      {(project.url || project.github) && (
        <div className="flex gap-4 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-accent hover:underline font-mono"
            >
              GitHub →
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-accent hover:underline font-mono"
            >
              Live →
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
