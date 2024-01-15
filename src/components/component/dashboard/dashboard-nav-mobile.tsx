'use client'

import { useState } from 'react'
import Link, { type LinkProps } from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Package, PackageIcon } from 'lucide-react'
import type { Route } from 'next'
import { usePathname } from 'next/navigation'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <PackageIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink href="/dashboard" className="flex items-center" onOpenChange={setOpen}>
          <Package size={32} className="h-8" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold">Parcel Co.</span>
        </MobileLink>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <MobileLink href={'/'} onOpenChange={setOpen}>
              <span className="text-lg">Homepage</span>
            </MobileLink>
            <MobileLink
              href={'/dashboard/employees'}
              className={`${
                pathname === '/dashboard/employees'
                  ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
                  : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              }`}
              onOpenChange={setOpen}
            >
              <span className="text-lg">Employees</span>
            </MobileLink>
            <MobileLink
              href={'/dashboard/company'}
              className={`${
                pathname === '/dashboard/company'
                  ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
                  : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              }`}
              onOpenChange={setOpen}
            >
              <span className="text-lg">Company</span>
            </MobileLink>
            <MobileLink
              href={'/dashboard/customers'}
              className={`${
                pathname === '/dashboard/customers'
                  ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
                  : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              }`}
              onOpenChange={setOpen}
            >
              <span className="text-lg">Customers</span>
            </MobileLink>
            <MobileLink
              href={'/dashboard/offices'}
              className={`${
                pathname === '/dashboard/offices'
                  ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
                  : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              }`}
              onOpenChange={setOpen}
            >
              <span className="text-lg">Offices</span>
            </MobileLink>
            <MobileLink
              href={'/dashboard/shipments'}
              className={`${
                pathname === '/dashboard/shipments'
                  ? 'text-blue-600 drop-shadow-sm transition-all hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300/40'
                  : 'text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              }`}
              onOpenChange={setOpen}
            >
              <span className="text-lg">Shipments</span>
            </MobileLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

type MobileLinkProps = LinkProps<Route> & {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={className}
    >
      {children}
    </Link>
  )
}
