'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

type themes = 'light' | 'dark' | 'system'

import { setCookieTheme } from '@/lib/theme_cookie'

export function ModeToggle({ cookie_theme }: { cookie_theme?: themes }) {
  const { theme, setTheme } = useTheme()

  let props = {
    light: '',
    system: '',
    dark: '',
  }

  function selectedThemes(theme: themes, currentTheme?: string) {
    if (typeof window === 'undefined') {
      currentTheme = cookie_theme
    }
    if (theme === currentTheme) {
      return 'bg-gray-200 hover:bg-gray-200 dark:bg-slate-800/70 dark:hover:bg-slate-800/70 text-accent-foreground' //dark:bg-swgray/75 dark:hover:bg-swgray/75
    }
  }

  function onClickAction(theme: themes) {
    setTheme(theme)
    setCookieTheme(theme)
  }
  return (
    <div
      className="flex w-fit rounded-b-full rounded-t-full border px-1 py-1 text-gray-600"
      role="radiogroup"
    >
      <Button
        className={`${selectedThemes(
          'light',
          theme,
        )} flex h-8 w-8 items-center justify-center rounded-[inherit] px-0 py-0`}
        onClick={() => onClickAction('light')}
        aria-checked={cookie_theme === 'light'}
        aria-label="Switch to light theme"
        variant={'ghost'}
        type="button"
        role="radio"
      >
        <svg
          className=" h-4 w-4"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2"></path>
          <path d="M12 21v2"></path>
          <path d="M4.22 4.22l1.42 1.42"></path>
          <path d="M18.36 18.36l1.42 1.42"></path>
          <path d="M1 12h2"></path>
          <path d="M21 12h2"></path>
          <path d="M4.22 19.78l1.42-1.42"></path>
          <path d="M18.36 5.64l1.42-1.42"></path>
        </svg>
      </Button>
      <Button
        className={`${selectedThemes(
          'system',
          theme,
        )} flex h-8 w-8 items-center justify-center rounded-[inherit] px-0 py-0`}
        onClick={() => onClickAction('system')}
        variant={'ghost'}
        aria-checked={cookie_theme === 'system'}
        aria-label="Switch to system theme"
        type="button"
        role="radio"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M8 21h8"></path>
          <path d="M12 17v4"></path>
        </svg>
      </Button>
      <Button
        className={`${selectedThemes(
          'dark',
          theme,
        )} flex h-8 w-8 items-center justify-center rounded-[inherit] px-0 py-0`}
        onClick={() => onClickAction('dark')}
        variant={'ghost'}
        aria-checked={cookie_theme === 'dark'}
        aria-label="Switch to dark theme"
        type="button"
        role="radio"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </Button>
    </div>
  )
}
