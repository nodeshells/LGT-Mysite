"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email'
import ArticleIcon from '@mui/icons-material/Article'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const menuItems = [
  { href: "/about", label: "About", icon: PersonIcon },
  { href: "/work", label: "Work", icon: WorkIcon },
  { href: "/contact", label: "Contact", icon: EmailIcon },
  { href: "/blog", label: "Blog", icon: ArticleIcon },
]

export function TailwindHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="flex justify-between items-center p-4 md:p-6">
          <Link href="/" className="no-underline">
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-light m-0">
                LGT-MySite
              </h1>
              <p className="text-white/70 text-sm mt-1 m-0">
                Claudeコードが作りました
              </p>
            </div>
          </Link>
          
          <button
            onClick={handleMenuToggle}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="メニューを開く"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={handleMenuToggle}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-zinc-950 z-[70] transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={handleMenuToggle}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="メニューを閉じる"
            >
              <CloseIcon />
            </button>
          </div>
          
          <nav>
            <ul className="list-none p-0 m-0">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.href} className="mb-2">
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="w-full flex items-center gap-4 text-white p-3 rounded-lg hover:bg-white/10 transition-colors text-left"
                    >
                      <Icon className="text-2xl" />
                      <span className="text-xl font-light">{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}