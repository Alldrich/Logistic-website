'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { submitAction } from '@/lib/form_action'
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
import { Input, type InputProps } from '@/components/ui/input'

const FormSchema = z.object({
  track_number: z.string().min(12, {
    message: 'Tracking number must be at least 10 characters.',
  }),
})

export function TrackForm({ className }: InputProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      track_number: '',
    },
  })

  return (
    <Form {...form}>
      <form
        action={async (formData: FormData) => {
          const valid = await form.trigger()
          if (!valid) return
          return submitAction(formData)
        }}
        className="w-2/3 flex-col space-y-6"
      >
        <FormField
          control={form.control}
          name="track_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className={className} placeholder="Tracking Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="">
          Track
        </Button>
      </form>
    </Form>
  )
}
