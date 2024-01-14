'use client'
import Link from 'next/link'
import { Package } from 'lucide-react'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MainNav } from '@/components/component/main-nav'
import { MobileNav } from '@/components/component/mobile-nav'

export function Header() {
  return (
    // <header className='absolute inset-x-0 top-0 z-50'>
    //   <nav className=" fixed retalive start-0 top-0 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
    //     <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
    //       <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //         <Package size={32} className="h-8" />
    //         <span className="self-center whitespace-nowrap text-2xl font-semibold">Parcel Co.</span>
    //       </a>
    //       <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
    //         <MobileNav />
    //       </div>
    //       <div
    //         className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
    //         id="navbar-sticky"
    //       >
    //         <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
    //           <li>
    //             <a
    //               href="#"
    //               className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
    //               aria-current="page"
    //             >
    //               Home
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
    //             >
    //               About
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
    //             >
    //               Services
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
    //             >
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center md:order-2">
        <MainNav />
        <MobileNav />
      </div>
    </header>
  )
}
