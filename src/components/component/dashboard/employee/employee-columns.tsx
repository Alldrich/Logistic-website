'use client'

import { type ColumnDef } from '@tanstack/react-table'
import type { ChangeEmployee, Employee, Roles, User } from '@/types/dashboard'
import { EmployeeTableActions } from '@/components/component/dashboard/employee/employee-table-action'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { getRoles } from '@/lib/company_actions'

export const EmployeeColumns: ColumnDef<Employee>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'firstName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          First Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue('firstName')}</div>,
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Last Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue('lastName')}</div>,
  },
  {
    accessorKey: 'email',
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Address
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue('address')}</div>,
  },
  {
    accessorKey: 'phoneNumber',
    header: () => <div className="">Phone Number</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue('phoneNumber')}</div>,
  },
  {
    accessorKey: 'birthDate',
    header: () => <div className="">Birthday</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue('birthDate')}</div>,
  },
  {
    accessorKey: 'roles',
    header: () => <div className="">Roles</div>,
    cell: ({ row }) => (
      <div className="lowercase">{(row.getValue('roles') as string[]).map(row => row + ' ')}</div>
    ),
  },
  {
    accessorKey: 'position',
    header: () => <div className="">Position</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue('position')}</div>,
  },
  {
    accessorKey: 'salary',
    header: () => <div className="">Salary</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue('salary')}</div>,
  },
  {
    accessorKey: 'officeId',
    header: () => <div className="">OfficeId</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue('officeId')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <DotsHorizontalIcon className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuItem
        //       onClick={() => navigator.clipboard.writeText(payment.id)}
        //     >
        //       Copy payment ID
        //     </DropdownMenuItem>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem>View customer</DropdownMenuItem>
        //     <DropdownMenuItem>View payment details</DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
        <EmployeeTableActions data={payment!} />
      )
    },
  },
]
