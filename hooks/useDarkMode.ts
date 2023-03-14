import { useState, useEffect } from 'react'

type theme = [string, (theme: string) => void]

const useDarkSide = (): theme => {
  const [theme, setTheme] = useState('dark')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme]
}

export default useDarkSide
