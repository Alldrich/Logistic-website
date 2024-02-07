import type { Customers } from '@/types/dashboard'
import { customersColumns } from '@/components/component/dashboard/customers/columns'
import { CustomersTable } from '@/components/component/dashboard/customers/data-table'

async function getData(): Promise<Customers[]> {
  const data: Customers[] = await fetch('https://65acf50cadbd5aa31bdfd37a.mockapi.io/api/v1/user', {
    cache: 'no-store',
  }).then(res => res.json())
  return data
}

export async function CustomerPage() {
  const data = await getData()
  return (
    <div className="container mx-auto w-full py-10">
      <CustomersTable columns={customersColumns} data={data} />
    </div>
  )
}
