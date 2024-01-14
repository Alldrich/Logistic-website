'use client'

import * as React from 'react'
import Link from 'next/link'
import { Package } from 'lucide-react'

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Package size={32} className="h-8" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold">Parcel Co.</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link href="/#" className={'transition-colors hover:text-foreground/80'}>
          Home
        </Link>
        <Link href="/#service" className={'transition-colors hover:text-foreground/80'}>
          Service
        </Link>
        <Link href="/#testimonials" className={'transition-colors hover:text-foreground/80'}>
          Testimonials
        </Link>
        <Link href="/#faq" className={'transition-colors hover:text-foreground/80'}>
          Faq
        </Link>
      </nav>
    </div>
  )
}
