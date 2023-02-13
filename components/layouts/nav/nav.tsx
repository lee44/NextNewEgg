import React from 'react'
import DarkModeToggler from '../../elements/darkmodetoggler'
import SignInOut from '../../elements/signinout'

const Nav = () => {
  return (
    <nav className='container h-20 top-0 flex justify-between items-center'>
      <h2 className='dark:text-white'>NextNewegg</h2>
      <div className='flex items-center gap-x-6'>
        <DarkModeToggler />
        <SignInOut />
      </div>
    </nav>
  )
}

export default Nav
