import type { Packages } from '@/types/dashboard'
import { PendingShipmentTable } from './data-table'
import { pendingShipmentColumns } from './columns'
import { GetPackages } from '@/lib/package_actions'

export async function PendingShipmentPage() {
  const data = await GetPackages('false')
  console.log(data)
  return (
    <div className="container mx-auto py-10">
      <PendingShipmentTable columns={pendingShipmentColumns} data={data!} />
    </div>
  )
}
