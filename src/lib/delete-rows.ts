'use server'

import type { RowModel } from '@tanstack/react-table'

export async function deleteRows(data: string[]) {
  console.log('deleteRows', data)
}

export async function deleteRow(data: string) {
  console.log('deleteRow', data)
}
