import React from 'react'
import DarkModeToggler from '../../elements/darkmodetoggler'

const Nav = () => {
  return (
    <nav className='container h-14 flex justify-between items-center text-white'>
      <h3 className='text-primary dark:text-white'>NextNewegg</h3>
      <DarkModeToggler />
    </nav>
  )
}

export default Nav
