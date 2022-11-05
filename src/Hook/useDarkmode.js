import { useEffect, useState} from 'react'

export const useDarkmode = () => {
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme === 'dark' ? 'light' : "dark";
   useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add('dark')
    root.classList.remove(colorTheme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return [colorTheme,  setTheme]
}
