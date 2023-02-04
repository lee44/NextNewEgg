import React, { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkMode from '../../hooks/useDarkMode'

const DarkModeToggler = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <>
      <DarkModeSwitch style={{}} checked={darkSide} onChange={toggleDarkMode} size={30} />
    </>
  )
}

export default DarkModeToggler
