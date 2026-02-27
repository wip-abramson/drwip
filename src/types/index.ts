export interface Social {
  label: string
  url: string
  handle?: string
}

export interface CurrentRole {
  role: string
  organisation: string
  url: string
}

export interface Profile {
  name: string
  tagline: string
  bio: string[]
  location: string
  currentRoles: CurrentRole[]
  socials: Social[]
}

export interface SkillGroup {
  category: string
  description: string
}

export interface ExperienceEntry {
  role: string
  organisation: string
  period: string
  description: string
  highlights: string[]
  url?: string
}

export interface Project {
  title: string
  description: string
  url?: string
  github?: string
  status: "active" | "completed" | "archived"
}

export interface WritingEntry {
  title: string
  description: string
  date: string
  url?: string
  status: "published" | "draft" | "coming-soon"
  tags: string[]
}

export interface Publication {
  paperId: string
  title: string
  year: number | null
  venue: string | null
  authors: string[]
  citationCount: number
  openAccessPdf: string | null
  externalIds: Record<string, string>
  publicationTypes: string[]
}
