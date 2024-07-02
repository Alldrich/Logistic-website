'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { changeShipmentData } from '@/lib/form_action'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { PackageCreate } from '@/types/dashboard'
import useSWR from 'swr'
import { user_fetcher } from '@/lib/user_actions'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { company_fetcher } from '@/lib/company_actions'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { createPackagePartial } from '@/lib/package_actions'
const formSchema = z.object({
  senderEmail: z.string(),
  receiverEmail: z.string(),
  weight: z.string(),
  toAdress: z.boolean().default(false).optional(),
  deliveryAddress: z.string(),
  companyName: z.string(),
  description: z.string(),
  fragile: z.boolean().default(false).optional(),
  hazardous: z.boolean().default(false).optional(),
})

function useUsers() {
  const { data } = useSWR('http://localhost:7028/users', user_fetcher, { refreshInterval: 60000 })
  return {
    users: data,
  }
}
function useCompanies() {
  const { data } = useSWR('http://localhost:7028/company', company_fetcher, {
    refreshInterval: 60000,
  })
  return {
    companies: data,
  }
}
function usePackagePrice(
  company: string,
  toAdress: boolean,
  weight: number,
  fragile: boolean,
  hazardous: boolean,
) {
  const { data } = useSWR(
    'http://localhost:7028/package/price?company=DHL&toAdress=true&weight=30.5&fragile=true&hazardous=true',
    company_fetcher,
    {
      refreshInterval: 60000,
    },
  )
  return {
    companies: data,
  }
}

export type PackageCreateData = z.infer<typeof formSchema>
export function CreatePackage() {
  async function handleSubmit(data: PackageCreateData) {
    let formData = new FormData()
    formData.append('senderEmail', data.senderEmail)
    formData.append('receiverEmail', data.receiverEmail)
    formData.append('deliveryAddress', data.deliveryAddress)
    formData.append('weight', String(data.weight))
    formData.append('toAdress', String(data.toAdress))
    formData.append('companyName', data.companyName)
    formData.append('description', data.description)
    formData.append('fragile', String(data.fragile))
    formData.append('hazardous', String(data.hazardous))
    console.log('Wea re here')
    await createPackagePartial(formData)
  }
  const { companies } = useCompanies()
  const { users } = useUsers()
  const [showEditDialog, setEditDialog] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderEmail: '',
      receiverEmail: '',
      deliveryAddress: '',
      weight: '0',
      toAdress: false,
      companyName: '',
      description: '',
      fragile: false,
      hazardous: false,
    },
  })
  const formButtonRef = React.useRef<HTMLButtonElement>(null)
  const formRef = React.useRef<HTMLFormElement>(null)
  return (
    <>
      <Button variant={'outline'} onClick={() => setEditDialog(true)}>
        Create
      </Button>
      <AlertDialog open={showEditDialog} onOpenChange={setEditDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <>
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="senderEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>User</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a valid sender to add" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {users?.map(user => (
                                <SelectItem key={user.id} value={user.email!}>
                                  {user.email!}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="receiverEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>User</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a valid receiver to add" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {users?.map(user => (
                                <SelectItem key={user.id} value={user.email!}>
                                  {user.email!}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a valid company" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {companies?.map(company => (
                            <SelectItem key={company.id} value={company.name!}>
                              {company.name!}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deliveryAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adress</FormLabel>
                      <FormControl>
                        <Input placeholder="adress" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="toAdress"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Delivery to Custom Address</FormLabel>
                        <FormDescription>
                          Set it if you want to deliver it to your address
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight</FormLabel>
                      <FormControl>
                        <Input placeholder="adress" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your package."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hazardous"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Hazardous</FormLabel>
                        <FormDescription>Set it if your package is hazardous</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fragile"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Fragile</FormLabel>
                        <FormDescription>Set it if your package is fragile</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <Button
                  className="hidden"
                  variant={'ghost'}
                  ref={formButtonRef}
                  type="submit"
                ></Button>
              </form>
            </Form>
          </>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="outline"
              onClick={() => {
                formRef.current?.requestSubmit()
                setEditDialog(false)
                toast({
                  description: 'This preset has been created.',
                })
              }}
            >
              Submit
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
