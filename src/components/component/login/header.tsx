import { MobileNav } from '@/components/component/mobile-nav'
import { AuthNav } from '@/components/component/login/navbar'

export function AuthHeader() {
  return (
    <div className="sticky top-0 flex min-h-16 w-full max-w-full justify-center">
      <header className="m-auto justify-between pl-6 pr-6 lg:flex lg:flex-row lg:items-center">
        <div className="container flex h-14 max-w-screen-2xl items-center md:order-2">
          <div className="w-full flex-1">
            <AuthNav />
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  )
}
