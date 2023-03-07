import React from 'react'
import DarkModeToggler from '../../elements/darkModeToggler'
import SignInOut from '../../elements/signinout'

const Nav = () => {
  return (
    <nav className='dark:bg-primary top-0'>
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
