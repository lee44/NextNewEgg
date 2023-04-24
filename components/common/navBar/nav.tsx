import React from 'react'
import DarkModeToggler from './darkmodetoggler'
import SignInOut from './signinout'

const Nav = (props: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <nav className='fixed top-0 z-50 w-screen bg-white shadow-md dark:bg-primary'>
      <div className='flex items-center justify-between h-16 p-2'>
        {props.children}
        {/* <h2 className='sm:text-2xl'>NextNewegg</h2>
        <div className='flex items-center gap-x-6'>
          <DarkModeToggler />
          <SignInOut />
        </div> */}
      </div>
    </nav>
  )
}

export default Nav
