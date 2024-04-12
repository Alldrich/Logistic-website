import { MainNav } from '@/components/component/main-nav'
import { MobileNav } from '@/components/component/mobile-nav'
import { UserNav } from './user-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center md:order-2">
        <div className="w-full flex-1">
          <MainNav />
          <MobileNav />
        </div>
        <UserNav />
      </div>
    </header>
  )
}
