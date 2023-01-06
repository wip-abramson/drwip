import React from "react"
import Project from "@wkocjan/gatsby-theme-intro/src/components/projects/project"
import { arrayOf, shape, ProjectType } from "@wkocjan/gatsby-theme-intro/src/types"

const Projects = ({ projects }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Outputs, Projects and Experiments
    </h5>
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
