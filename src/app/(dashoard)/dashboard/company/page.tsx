import type { Packages } from '@/types/dashboard'
import { CompanyPage } from '@/components/component/dashboard/company/page-data'
import { Suspense } from 'react'

export default function Company() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <CompanyPage />
      </Suspense>
    </div>
  )
}
