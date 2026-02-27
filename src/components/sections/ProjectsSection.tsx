import * as React from "react"
import Section from "../Section"
import ProjectCard from "../ui/ProjectCard"
import { projects } from "../../data/projects"

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" number="04" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default ProjectsSection
