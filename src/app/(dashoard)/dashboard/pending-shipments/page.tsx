import type { Packages } from '@/types/dashboard'
import { PendingShipmentPage } from '@/components/component/dashboard/pending_shipments/page-data'
import { Suspense } from 'react'

export default function PendingShipments() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<div>Loading...</div>}>
        <PendingShipmentPage />
      </Suspense>
    </div>
  )
}
