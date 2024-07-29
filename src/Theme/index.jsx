'use client'

import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme

      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      return prefersDarkScheme ? 'dark' : 'light'
    }

    return 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
      document.documentElement.className = theme
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)