import React from 'react'
import DarkModeToggler from '../../elements/darkmodetoggler'
import SignInOut from '../../elements/signinout'

const Nav = () => {
  return (
    <nav className='fixed top-0 w-screen dark:bg-primary z-50'>
      <div className='container h-20 flex justify-between items-center'>
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
