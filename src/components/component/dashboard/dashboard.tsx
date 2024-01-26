import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import type React from 'react'

export function Component() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Recent Shipments</h1>
      </div>
      <div className=" rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Order Number</TableHead>
              <TableHead className="max-w-[150px]">Status</TableHead>
              <TableHead className="hidden md:table-cell">Current Location</TableHead>
              <TableHead className="hidden md:table-cell">End Point</TableHead>
              <TableHead>Client Name</TableHead>
              <TableHead>Estimated Time</TableHead>
              <TableHead>Departure Time</TableHead>
              <TableHead>Arrival Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>#001</TableCell>
              <TableCell className="font-medium">Delivered</TableCell>
              <TableCell className="hidden md:table-cell">N/A</TableCell>
              <TableCell>New York, NY</TableCell>
              <TableCell className="hidden md:table-cell">John Doe</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>8:00 AM</TableCell>
              <TableCell>12:00 PM</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#002</TableCell>
              <TableCell className="font-medium">On Delivery</TableCell>
              <TableCell className="hidden md:table-cell">Los Angeles, CA</TableCell>
              <TableCell>San Francisco, CA</TableCell>
              <TableCell className="hidden md:table-cell">Jane Smith</TableCell>
              <TableCell>5 hours</TableCell>
              <TableCell>9:00 AM</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>#003</TableCell>
              <TableCell className="font-medium">Canceled</TableCell>
              <TableCell className="hidden md:table-cell">N/A</TableCell>
              <TableCell>Chicago, IL</TableCell>
              <TableCell className="hidden md:table-cell">Bob Johnson</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  )
}
