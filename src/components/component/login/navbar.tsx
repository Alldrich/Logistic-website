import * as React from 'react'
import Link from 'next/link'
import { Package } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AuthNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Package size={32} className="h-8" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold">Parcel</span>
      </Link>
    </div>
  )
}
