import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useThemeContext } from '../../../store/themeContext'

const DarkModeToggler = () => {
  const themeCtx = useThemeContext()
  const [darkSide, setDarkSide] = useState(themeCtx.isDarkTheme)

  const toggleDarkMode = (checked: boolean) => {
    setDarkSide(checked)
    themeCtx.toggleThemeHandler()
  }

  /*
     On initial render, themeCtx.isDarkTheme default state value is true. 
     ContextAPI will update the state to false and rerender. 
     useEffect will watch for the state change and rerender the compoonent 
  */
  useEffect(() => {
    setDarkSide(themeCtx.isDarkTheme)
  }, [themeCtx.isDarkTheme])

  return (
    <>
      <DarkModeSwitch style={{}} checked={darkSide} onChange={toggleDarkMode} sunColor={'#e05d00'} size={30} />
    </>
  )
}

export default DarkModeToggler
