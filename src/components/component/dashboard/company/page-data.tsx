import type { Company } from '@/types/dashboard'
import { companyColumns } from '@/components/component/dashboard/company/columns'
import { CompanyTable } from '@/components/component/dashboard/company/data-table'
import mockdata from '@/assets/MOCK_DATA.json'
import { GetCompanies } from '@/lib/company_actions'
// async function getData(): Promise<Company[]> {
//   const data: Company[] = await fetch('/assets/MOCK_DATA.json', {
//     cache: 'no-store',
//   }).then(res => res.json())
//   return data
// }

export async function CompanyPage() {
  const data = await GetCompanies()
  return (
    <div className="container mx-auto w-full py-10">
      <CompanyTable columns={companyColumns} data={data!} />
    </div>
  )
}
