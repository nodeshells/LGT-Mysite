export interface Profile {
  name: string
  tagline: string
  avatar: string
  location: string
  occupation: string
  education: string
  interests: string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  level: number
  icon: string
}

export interface SkillsData {
  categories: {
    all: string
    frontend: string
    backend: string
    tools: string
    other: string
  }
  items: Skill[]
}

export interface TimelineItem {
  date: string
  title: string
  description: string
  icon: string
  color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
}

export interface Hobby {
  title: string
  icon: string
  description: string
  tags: string[]
  color: string
}

export interface Credits {
  implementer: {
    label: string
    name: string
    icon: string
  }
  collaborator: {
    label: string
    name: string
    url: string
    icon: string
  }
  footer: string
}

export interface NavigationItem {
  href: string
  label: string
  icon: string
  description: string
  isContentSwitch: boolean
}

export interface Meta {
  siteTitle: string
  siteDescription: string
  homeTitle: string
  profilePageTitle: string
  profilePageDescription: string
  skillsPageTitle: string
  skillsPageDescription: string
  timelinePageTitle: string
  timelinePageDescription: string
  hobbyPageTitle: string
  hobbyPageDescription: string
}

export interface ContentData {
  profile: Profile
  skills: SkillsData
  timeline: TimelineItem[]
  hobbies: Hobby[]
  credits: Credits
  navigation: NavigationItem[]
  meta: Meta
}