'use client'
import Link, { type LinkProps } from 'next/link'
import { PackageIcon, HomeIcon, UsersIcon, NewspaperIcon, type LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import type { Route } from 'next'

type LinkGroup = LinkProps<Route> & {
  name: string
  icon: LucideIcon
}

const links: LinkGroup[] = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Employees',
    href: '/dashboard/employees',
    icon: UsersIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UsersIcon },
  { name: 'Offices', href: '/dashboard/offices', icon: HomeIcon },
  { name: 'Shipments', href: '/dashboard/shipments', icon: PackageIcon },
  { name: 'Inquiries', href: '/dashboard/inquiries', icon: NewspaperIcon },
]

export function LeftNav() {
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
