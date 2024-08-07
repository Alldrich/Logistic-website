'use client'
import Link, { type LinkProps } from 'next/link'
import { KeyRound, UserCog, VenetianMask, type LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import type { Route } from 'next'

type LinkGroup = LinkProps<Route> & {
  name: string
  icon: LucideIcon
}

const links: LinkGroup[] = [
  {
    name: 'General',
    href: '/profile',
    icon: UserCog,
  },
  {
    name: 'Password',
    href: '/profile/password',
    icon: KeyRound,
  },
  { name: 'Personal Data', href: '/profile/personal-data', icon: VenetianMask },
]

export function DekstopProfileNav() {
  const pathname = usePathname()
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        {links.map(link => {
          const LinkIcon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              prefetch={true}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                pathname === link.href
                  ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
                  : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              }`}
            >
              <LinkIcon className="h-4 w-4" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
