import type { Packages } from '@/types/dashboard'
import { CompanyPage } from '@/components/component/dashboard/company/page-data'
import { Suspense } from 'react'
import { OfficePage } from '@/components/component/dashboard/office/page-data'
export default function Company() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <OfficePage />
      </Suspense>
    </div>
  )
}
