import type { Packages } from '@/types/dashboard'
import { shipmentColumns } from '@/components/component/dashboard/shipments/columns'
import { ShipmentTable } from '@/components/component/dashboard/shipments/data-table'

async function getData(): Promise<Packages[]> {
  const data: Packages[] = await fetch(
    'https://65acf50cadbd5aa31bdfd37a.mockapi.io/api/v1/package',
    { cache: 'no-store' },
  ).then(res => res.json())
  return data
}

export async function ShipmentPage() {
  const data = await getData()
  return (
    <div className="container mx-auto py-10">
      <ShipmentTable columns={shipmentColumns} data={data} />
    </div>
  )
}
