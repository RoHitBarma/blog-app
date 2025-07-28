import React, { useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <button 
      onClick={toggleTheme} 
      className='themeSwitch fw-bold btn btn-outline-secondary ms-3'
    >
      {theme === 'light' ? '🌙 Dark' : '☀ Light'}
    </button>
  )
}

export default ThemeSwitcher
