'use server'
import { cookies } from 'next/headers'

type Theme = 'light' | 'dark' | 'system'

export async function getCookieTheme() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')
  if (theme === undefined) {
    return 'system'
  }
  return theme.value as Theme
}

export async function setCookieTheme(theme: string) {
  const cookieStore = cookies()
  cookieStore.set('theme', theme, {})
}
