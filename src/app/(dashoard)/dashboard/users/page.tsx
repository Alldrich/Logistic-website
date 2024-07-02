import { CustomerPage } from '@/components/component/dashboard/customers/page-data'
import { UserPage } from '@/components/component/dashboard/users/user-page'
import { Suspense } from 'react'

export default function Customers() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <UserPage />
      </Suspense>
    </div>
  )
}
