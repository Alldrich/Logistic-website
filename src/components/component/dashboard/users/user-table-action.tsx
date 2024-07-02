'use client'

import * as React from 'react'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import useSWR from 'swr'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { changeCustomerData } from '@/lib/form_action'
import { add, format } from 'date-fns'
import { type User } from '@/types/dashboard'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  changeUserDataById,
  DeleteUserById,
  DeleteUserRoleById,
  role_fetcher,
} from '@/lib/user_actions'
import { useRef } from 'react'
import { getRoles } from '@/lib/company_actions'

const formSchema = z.object({
  firstName: z.string(),
  email: z.string().min(2, {
    message: 'Please enter a valid email address.',
  }),
  lastName: z.string(),
  birthday: z.string(),
  phone: z.string(),
  address: z.string(),
  role: z.string(),
  id: z.string().min(2, {
    message: 'Please enter a valid id.',
  }),
})
const formSchemaDelete = z.object({
  role: z.string(),
  id: z.string().min(2, {
    message: 'Please enter a valid id.',
  }),
})

type UserFormValues = z.infer<typeof formSchema>
type UserFormValuesDelete = z.infer<typeof formSchemaDelete>

async function handleSubmit(data: UserFormValues) {
  let formData = new FormData()
  formData.append('firstName', data.firstName)
  formData.append('email', data.email)
  formData.append('lastName', data.lastName)
  formData.append('birthDate', data.birthday)
  formData.append('phoneNumber', data.phone)
  formData.append('address', data.address)
  formData.append('role', data.role)
  formData.append('id', data.id)
  console.log('We are here', data)
  await changeUserDataById(formData)
}
async function handleSubmit2(data: UserFormValuesDelete) {
  let formData = new FormData()
  formData.append('role', data.role)
  formData.append('id', data.id)
  await DeleteUserRoleById(formData)
}

export function UserTableActions({ data: user }: { data: User }) {
  const { data } = useSWR('http://localhost:7028/role', role_fetcher, { refreshInterval: 60000 })
  console.log(data)
  const defaultValues: Partial<UserFormValues> = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
    firstName: user?.firstName ?? '',
    lastName: user?.lastName ?? '',
    email: user?.email ?? '',
    address: user?.address ?? '',
    birthday: user?.birthDate ?? format(new Date(), 'yyyy-MM-dd'),
    phone: user?.phoneNumber ?? '',
    id: user?.id ?? '',
    role: user?.roles?.[0] ?? 'null',
  }
  const defaultValuesDelete: Partial<UserFormValuesDelete> = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
    id: user?.id ?? '',
    role: user?.roles?.[0] ?? 'null',
  }
  const [showEditDialog, setEditDialog] = React.useState(false)
  const [showDeleteRoleDialog, setDeleteRoleDialog] = React.useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)
  const form = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })
  const formDelete = useForm<UserFormValuesDelete>({
    resolver: zodResolver(formSchemaDelete),
    defaultValues: defaultValuesDelete,
  })
  const formButtonRef = React.useRef<HTMLButtonElement>(null)
  const deleteFormButtonRef = React.useRef<HTMLButtonElement>(null)
  const fromRef = useRef<HTMLFormElement>(null)
  const deletefromRef = useRef<HTMLFormElement>(null)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(user.id ?? '')
            }}
          >
            Copy client ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => setEditDialog(true)}>Edit</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setDeleteRoleDialog(true)}>
            Delete Role
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setShowDeleteDialog(true)} className="text-red-600">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showEditDialog} onOpenChange={setEditDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <>
            <Form {...form}>
              <form ref={fromRef} onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value ?? ''} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value ?? ''} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthday"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Birthday</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value ?? ''} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>address</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value ?? ''} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value ?? ''} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>id</FormLabel>
                      <FormControl>
                        <Input disabled placeholder="id" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roles</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a valid role to add" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {data?.map((role, index) => (
                            <SelectItem key={index} value={role.name!}>
                              {role.name!}
                            </SelectItem>
                          ))}
                          <SelectItem value="null">null</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="hidden" variant={'default'} ref={formButtonRef} type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="outline"
              onClick={() => {
                fromRef.current?.requestSubmit()
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
      <AlertDialog open={showDeleteRoleDialog} onOpenChange={setDeleteRoleDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <>
            <Form {...formDelete}>
              <form
                ref={deletefromRef}
                onSubmit={formDelete.handleSubmit(handleSubmit2)}
                className="space-y-8"
              >
                <FormField
                  control={formDelete.control}
                  name="id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Id</FormLabel>
                      <FormControl>
                        <Input disabled placeholder={field.value ?? ''} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formDelete.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roles</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a valid role to add" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {user.roles?.map((role, index) => (
                            <SelectItem key={index} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                          <SelectItem value="null">null</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="hidden"
                  variant={'default'}
                  ref={deleteFormButtonRef}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="outline"
              onClick={() => {
                deletefromRef.current?.requestSubmit()
                setDeleteRoleDialog(false)
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
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This preset will no longer be accessible by you or
              others you&apos;ve shared it with.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={async () => {
                await DeleteUserById(user?.id!)
                toast({
                  description: 'This preset has been deleted.',
                })
                setShowDeleteDialog(false)
              }}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
