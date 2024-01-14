'use client'

import * as React from 'react'
import Link, { type LinkProps } from 'next/link'
import { ViewVerticalIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Package } from 'lucide-react'
import type { UrlObject } from 'url'
import type { Route } from 'next'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu size={24} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink href="/" className="flex items-center" onOpenChange={setOpen}>
          <Package size={32} className="h-8" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold">Parcel Co.</span>
        </MobileLink>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <MobileLink href={'/#'} onOpenChange={setOpen}>
              <span className="text-lg">Home</span>
            </MobileLink>
            <MobileLink href={'/#service'} onOpenChange={setOpen}>
              <span className="text-lg">Service</span>
            </MobileLink>
            <MobileLink href={'/#testimonials'} onOpenChange={setOpen}>
              <span className="text-lg">Testimonials</span>
            </MobileLink>
            <MobileLink href={'/#faq'} onOpenChange={setOpen}>
              <span className="text-lg">Faq</span>
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
