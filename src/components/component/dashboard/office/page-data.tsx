import type { Company } from '@/types/dashboard'
import { CompanyTable } from '@/components/component/dashboard/company/data-table'
import mockdata from '@/assets/MOCK_DATA.json'
import { GetCompanies } from '@/lib/company_actions'
import { OfficeTable } from './data-table'
import { officeColumns } from './columns'
import { GetOffices } from '@/lib/office_actions'

export async function OfficePage() {
  const data = await GetCompanies()
  const offices = await GetOffices()
  return (
    <div className="container mx-auto w-full py-10">
      <OfficeTable columns={officeColumns} data={offices!} company={data!} />
    </div>
  )
}
