import React from 'react'
import DarkModeToggler from './darkmodetoggler'
import SignInOut from './signinout'

const Nav = () => {
  return (
    <nav className='fixed top-0 z-50 w-screen bg-white shadow-md dark:bg-primary'>
      <div className='container flex items-center justify-between h-20'>
        <h2 className='sm:text-2xl'>NextNewegg</h2>
        <div className='flex items-center gap-x-6'>
          <DarkModeToggler />
          <SignInOut />
        </div>
      </div>
    </nav>
  )
}

export default Nav
