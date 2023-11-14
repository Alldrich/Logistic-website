import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Footer from '@/components/component/footer'
import Header from '@/components/component/header'
import { ThemeProvider } from "@/components/component/theme-provider";
import { ModeToggle } from '@/components/component/theme_switcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Cargo - Global Logistics and International Shipping',
  description: 'Cargo is a company with many years of experience in transporting and sending parcels of any weight and complexity',
  keywords: ['Parcel', 'Cargo', 'Transport' , 'Courier'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`flex flex-col min-h-screen  ${inter.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div>
              <Header />
              {children}
              <Footer />
              <ModeToggle />
            </div>
            </ThemeProvider>
        </body>
    </html>
  )
}
