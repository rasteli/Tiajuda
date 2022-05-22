import React, { useContext, useEffect, useState, createContext } from "react"

interface ThemeContextData {
  isDarkMode: boolean
  mode: "light" | "dark"
  toggleDarkMode(): void
}

interface ThemeContextProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as ThemeContextData)

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mode, setMode] = useState<"light" | "dark">("light")

  useEffect(() => {
    setMode(isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  const value: ThemeContextData = {
    mode,
    isDarkMode,
    toggleDarkMode
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
