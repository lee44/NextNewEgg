import React, { useContext, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import ThemeContext from '../../store/theme'

const DarkModeToggler = () => {
  const themeCtx = useContext(ThemeContext)
  const [darkSide, setDarkSide] = useState(themeCtx.isDarkTheme)

  const toggleDarkMode = (checked: boolean) => {
    setDarkSide(checked)
    themeCtx.toggleThemeHandler()
  }

  return (
    <>
      <DarkModeSwitch style={{}} checked={darkSide} onChange={toggleDarkMode} size={30} />
    </>
  )
}

export default DarkModeToggler
