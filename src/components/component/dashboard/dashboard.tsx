'use client'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import type React from 'react'
import { LineChart, type ValueFormatter } from '@tremor/react'
import type { CompanyRevenue } from '@/types/dashboard'

const valueFormatter: ValueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString()
}

export function Component({ data }: { data: CompanyRevenue[] }) {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Company Revenues</h1>
      </div>
      <div className=" rounded-lg border shadow-sm">
        <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Newsletter revenue over time (USD)
        </h3>
        <LineChart
          className="mt-4 h-72"
          data={data}
          index="date"
          yAxisWidth={65}
          categories={['revenue']}
          colors={['indigo', 'cyan']}
          valueFormatter={valueFormatter}
        />
      </div>
    </main>
  )
}
