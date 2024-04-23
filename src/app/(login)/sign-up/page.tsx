import Image from 'next/image'
import { SignUpForm } from '@/components/component/login/sign-up-ui'
import dl from '@/assets/delivery_guy_min.jpg'
import type { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Sign Up - Cargo',
  description:
    'Sign Up page for Cargo is a company with many years of experience in transporting and sending parcels of any weight and complexity',
  keywords: ['Parcel', 'Cargo', 'Transport', 'Courier', 'Login', 'Authentications', 'Sign Up'],
}

export default function SignupPage() {
  return <SignUpForm />
}
