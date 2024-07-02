'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from '@/lib/auth_actions'
import { toast } from 'sonner'

let res: string | undefined = undefined
const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(5, {
    message: 'Please enter a valid email address.',
  }),
})

async function handleSubmit(data: z.infer<typeof formSchema>) {
  let formData = new FormData()
  formData.append('email', data.email)
  formData.append('password', data.password)
  let res2 = await signIn(formData)
  if (res) {
    toast.error('Password or email incorect', {
      className: 'bg-red-500',
      action: {
        label: 'Action',
        onClick: () => console.log('Action!'),
      },
    })
  }
}

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="grid gap-4">
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-slate-500/70"
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Link
                          href="/forgot-password"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          className={`w-full ${res === undefined ? '' : 'border-red-800'}`}
                          {...field}
                          required
                        />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {res === undefined ? (
                  ''
                ) : (
                  <a className="text-red-500" id="error">
                    Incorrect password or username
                  </a>
                )}
              </div>
              <Button type="submit" className={`w-full`}>
                Login
              </Button>
            </form>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
        </Form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
