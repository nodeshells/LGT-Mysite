"use client"

import { usePathname } from 'next/navigation'
import { MuiHeader } from './MuiHeader'

export function ConditionalHeader() {
  const pathname = usePathname()
  
  // Timeline、Skills、Hobbyページではヘッダーを非表示
  const hideHeaderPaths = ['/timeline', '/skills', '/hobby']
  const shouldHideHeader = hideHeaderPaths.includes(pathname)
  
  if (shouldHideHeader) {
    return null
  }
  
  return <MuiHeader />
}