import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PackageIcon, BellIcon, SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import { LeftNav } from '@/components/component/dashboard/dashboard-nav-left'
import { MobileNav } from '@/components/component/dashboard/dashboard-nav-mobile'
import { UserNav } from '@/components/component/user-nav'
export function MainDashboardNav({ children }: { children?: React.ReactNode }) {
  return (
    <main key="1" className=" grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="dark:to-dark hidden border-r bg-gradient-to-b from-gray-100/40 to-white dark:bg-gradient-to-b dark:from-gray-800/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <PackageIcon className="h-6 w-6" />
              <span className="">Logistic Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <LeftNav />
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
          {/* <Link className="lg:hidden" href="#">
            <PackageIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link> */}
          {/* <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full appearance-none bg-white pl-8 shadow-none dark:bg-gray-950 md:w-2/3 lg:w-1/3"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div> */}
          <div className="w-full flex-1">
            <MobileNav />
          </div>
          <UserNav />
        </header>
        {children}
      </div>
    </main>
  )
}
