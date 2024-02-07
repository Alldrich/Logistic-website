'use server'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const FormSchema = z.object({
  track_number: z.string().min(10, {
    message: 'Tracking number must be at least 10 characters.',
  }),
})

export async function submitAction(data: FormData) {
  console.log('submitAction', data)
}

export async function changeShipmentData(data: FormData) {
  console.log('changeShipmentData', data)
}

export async function changeCustomerData(data: FormData) {
  console.log('changeCustomerData', data)
}
