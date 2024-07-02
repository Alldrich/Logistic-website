import type { Packages } from '@/types/dashboard'
import { shipmentColumns } from '@/components/component/dashboard/shipments/columns'
import { ShipmentTable } from '@/components/component/dashboard/shipments/data-table'
import { GetPackages } from '@/lib/package_actions'

export async function ShipmentPage() {
  const data = await GetPackages()
  return (
    <div className="container mx-auto py-10">
      <ShipmentTable columns={shipmentColumns} data={data!} />
    </div>
  )
}
