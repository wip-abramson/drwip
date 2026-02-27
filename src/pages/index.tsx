import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import SkillsSection from "../components/sections/SkillsSection"
import ExperienceSection from "../components/sections/ExperienceSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import ContactSection from "../components/sections/ContactSection"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Will Abramson — drwip.com</title>
    <meta
      name="description"
      content="Building cryptographic systems for identity, coordination, and trust."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)
