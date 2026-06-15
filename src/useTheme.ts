import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'system'

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function resolveIsDark(theme: Theme): boolean {
  return theme === 'system' ? getSystemDark() : theme === 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('twig-theme') as Theme | null
    return stored ?? 'system'
  })

  const isDark = resolveIsDark(theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => document.documentElement.classList.toggle('dark', mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  function toggle() {
    const next = isDark ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('twig-theme', next)
  }

  return { isDark, toggle }
}
