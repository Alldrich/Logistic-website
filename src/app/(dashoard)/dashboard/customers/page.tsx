import { CustomerPage } from '@/components/component/dashboard/customers/page-data'
import { Suspense } from 'react'

export default function Customers() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <CustomerPage />
      </Suspense>
    </div>
  )
}
