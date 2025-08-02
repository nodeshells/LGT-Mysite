import { useMemo } from 'react'
import contentData from '@/data/content.json'
import type { 
  ContentData, 
  Profile, 
  SkillsData, 
  TimelineItem, 
  Hobby, 
  Credits, 
  NavigationItem,
  Meta 
} from '@/data/types/content'

const typedContentData = contentData as ContentData

export function useContent() {
  return useMemo(() => typedContentData, [])
}

export function useProfile(): Profile {
  const content = useContent()
  return content.profile
}

export function useSkills(): SkillsData {
  const content = useContent()
  return content.skills
}

export function useTimeline(): TimelineItem[] {
  const content = useContent()
  return content.timeline
}

export function useHobbies(): Hobby[] {
  const content = useContent()
  return content.hobbies
}

export function useCredits(): Credits {
  const content = useContent()
  return content.credits
}

export function useNavigation(): NavigationItem[] {
  const content = useContent()
  return content.navigation
}

export function useMeta(): Meta {
  const content = useContent()
  return content.meta
}