import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Footer } from '@/components/component/footer'
import { ThemeProvider } from '@/components/component/theme-provider'
import { inter } from '@/components/font'
import { Suspense } from 'react'
import { AuthHeader } from '@/components/component/login/header'

export const metadata: Metadata = {
  title: 'Login - Cargo',
  description:
    'Login page for Cargo is a company with many years of experience in transporting and sending parcels of any weight and complexity',
  keywords: ['Parcel', 'Cargo', 'Transport', 'Courier', 'Login', 'Authentications'],
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthHeader />
          <main className="flex-1 bg-background text-foreground">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
