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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { changeCustomerData } from '@/lib/form_action'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Please enter a valid email address.',
  }),
  email: z.string().min(2, {
    message: 'Please enter a valid email address.',
  }),
})

async function handleSubmit(data: z.infer<typeof formSchema>) {
  let formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  await changeCustomerData(formData)
}

export function CreatePackage() {
  const [showEditDialog, setEditDialog] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })
  const formButtonRef = React.useRef<HTMLButtonElement>(null)
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
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
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
                formButtonRef.current?.click()
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
