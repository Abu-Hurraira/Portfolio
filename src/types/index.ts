export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  tech: string[]
  github?: string
  live?: string
  features: string[]
  challenges: string[]
  solutions: string[]
  role: string
  category: string
  year: string
  architecture?: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  location: string
  period: string
  current: boolean
  logo?: string
  website?: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  status?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface Achievement {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface NavItem {
  label: string
  href: string
  shortcut?: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface GitHubProfile {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  location?: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  homepage: string | null
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
