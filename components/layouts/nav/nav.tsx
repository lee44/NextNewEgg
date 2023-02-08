import React from 'react'
import DarkModeToggler from '../../elements/darkmodetoggler'
import Profile from '../../elements/profile'

const Nav = () => {
  return (
    <nav className='container h-20 top-0 flex justify-between items-center text-black dark:text-white'>
      <h2>NextNewegg</h2>
      <div className='flex items-center gap-x-6'>
        <DarkModeToggler />
        <Profile />
      </div>
    </nav>
  )
}

export default Nav
