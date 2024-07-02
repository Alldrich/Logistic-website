import { GetUsers } from '@/lib/user_actions'
import { EmployeeColumns } from '@/components/component/dashboard/employee/employee-columns'
import { EmployeeDataTable } from './employee-data-table'
import { getRoles } from '@/lib/company_actions'
import { GetOffices } from '@/lib/office_actions'
import { GetEmployees, GetPositions } from '@/lib/employee_actions'

export async function EmployeePage() {
  const data = await GetEmployees()
  const users = await GetUsers()
  const positions = await GetPositions()
  const offices = await GetOffices()
  return (
    <div className="container mx-auto w-full py-10">
      <EmployeeDataTable
        columns={EmployeeColumns}
        data={data!}
        user={users!}
        position={positions!}
        office={offices!}
      />
    </div>
  )
}
