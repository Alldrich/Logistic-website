import { GeneralProfileForm } from '@/components/component/profile/general-form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { GetCurrentUser } from '@/lib/auth_actions'
import { CircleUser, Menu, Package2, Search } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Page() {
  var user = await GetCurrentUser()
  return (
    <div className="mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <GeneralProfileForm user={user} />
      </Suspense>
    </div>
  )
}
