"use client"

import { useRouter } from 'next/navigation'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email'
import ArticleIcon from '@mui/icons-material/Article'

const menuItems = [
  {
    title: "About",
    description: "私について、スキルセット、経歴など",
    icon: PersonIcon,
    href: "/about",
  },
  {
    title: "Work",
    description: "これまでの作品やプロジェクト",
    icon: WorkIcon,
    href: "/work",
  },
  {
    title: "Contact",
    description: "お問い合わせ、SNSリンク",
    icon: EmailIcon,
    href: "/contact",
  },
  {
    title: "Blog",
    description: "技術記事、日々の学び",
    icon: ArticleIcon,
    href: "/blog",
  },
]

export function TailwindMenuList() {
  const router = useRouter()

  return (
    <div className="w-full max-w-2xl mx-auto">
      <ul className="list-none p-0 m-0 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.href}>
              <button
                onClick={() => router.push(item.href)}
                className="w-full bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 
                         hover:bg-white/10 transition-all duration-200 text-left
                         border border-white/10 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl md:text-2xl font-light mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}