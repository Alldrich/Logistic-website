'use client'
import Link from 'next/link'
import { PackageIcon, HomeIcon, UsersIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function LeftNav() {
  const pathname = usePathname()
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === '/dashboard'
              ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
              : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          }`}
          href="/dashboard"
        >
          <HomeIcon className="h-4 w-4" />
          Home
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === '/dashboard/employees'
              ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
              : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          }`}
          href="/dashboard/employees"
        >
          <UsersIcon className="h-4 w-4" />
          Employees
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === '/dashboard/customers'
              ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
              : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          }`}
          href="/dashboard/customers"
        >
          <UsersIcon className="h-4 w-4" />
          Customers
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === '/dashboard/offices'
              ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
              : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          }`}
          href="/dashboard/offices"
        >
          <HomeIcon className="h-4 w-4" />
          Offices
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
            pathname === '/dashboard/shipments'
              ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
              : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          }`}
          href="/dashboard/shipments"
        >
          <PackageIcon className="h-4 w-4" />
          Shipments
        </Link>
      </nav>
    </div>
  )
}
