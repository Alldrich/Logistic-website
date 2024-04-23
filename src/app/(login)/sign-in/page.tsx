import Image from 'next/image'
import { LoginForm } from '@/components/component/login/login-ui'
import dl from '@/assets/delivery_guy_min.jpg'
import type { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Sign In - Cargo',
  description:
    'Sign In page for Cargo is a company with many years of experience in transporting and sending parcels of any weight and complexity',
  keywords: ['Parcel', 'Cargo', 'Transport', 'Courier', 'Login', 'Authentications', 'Sign In'],
}

export default function LoginPage() {
  return <LoginForm />
}
