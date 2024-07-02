import Image from 'next/image'
import { ForgotPasswordForm } from '@/components/component/login/forgot-password'
import dl from '@/assets/delivery_guy_min.jpg'
import type { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Forgot Password - Cargo',
  description:
    'Forgot Password page for Cargo is a company with many years of experience in transporting and sending parcels of any weight and complexity',
  keywords: [
    'Parcel',
    'Cargo',
    'Transport',
    'Courier',
    'Login',
    'Authentications',
    'Forgot Password',
  ],
}

export default function LoginPage() {
  return <ForgotPasswordForm />
}
