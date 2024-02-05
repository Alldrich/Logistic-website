import type { Packages } from '@/types/dashboard'
import { ShipmentPage } from '@/components/component/dashboard/shipments/page-data'
import { Suspense } from 'react'

export default function Shipments() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <ShipmentPage />
      </Suspense>
    </div>
  )
}
