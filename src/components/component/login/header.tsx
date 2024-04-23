import { MobileNav } from '@/components/component/mobile-nav'
import { AuthNav } from '@/components/component/login/navbar'
import Link from 'next/link'
import { Package } from 'lucide-react'

export function AuthHeader() {
  return (
    <div className="absolute top-0 mx-auto mt-6 w-full px-8 sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between sm:h-10">
        <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Package size={32} className="h-8" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">Parcel</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
