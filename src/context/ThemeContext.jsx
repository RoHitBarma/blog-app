import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')
  
  // we use useEffect so when theme changes body atribute also chenge
  useEffect(() => {    
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  //Toggle Function
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

// export default ThemeContext
