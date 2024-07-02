import { MainNav } from '@/components/component/main-nav'
import { MobileNav } from '@/components/component/mobile-nav'
import { UserNav } from './user-nav'
import { GetCurrentUser } from '@/lib/auth_actions'
import { useStore } from '@tanstack/react-store'
import { Store } from '@tanstack/store'

export async function Header() {
  let user = await GetCurrentUser()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center md:order-2">
        <div className="w-full flex-1">
          <MainNav />
          <MobileNav />
        </div>
        <UserNav user={user} />
      </div>
    </header>
  )
}
