import type { Customers } from '@/types/dashboard'
import { customersColumns } from '@/components/component/dashboard/customers/columns'
import { CustomersTable } from '@/components/component/dashboard/customers/data-table'
import { GetUsers } from '@/lib/user_actions'
import { userColumns } from '@/components/component/dashboard/users/user-columns'
import { UsersDataTable } from './users-data-table'
import { getRoles } from '@/lib/company_actions'

export async function UserPage() {
  const data = await GetUsers()
  const roles = await getRoles()
  return (
    <div className="container mx-auto w-full py-10">
      <UsersDataTable columns={userColumns} data={data!} role={roles!} />
    </div>
  )
}
