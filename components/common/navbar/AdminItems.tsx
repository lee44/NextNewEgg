import React from 'react'
import DarkModeToggler from './darkmodetoggler'
import SignInOutButton from './SignInOutButton'

const AdminItems = () => {
  return (
    <div className='flex items-center justify-between h-16 p-2 px-6'>
      <h2 className='sm:text-2xl'>NextNewegg</h2>
      <div className='flex items-center gap-6'>
        <DarkModeToggler />
        <SignInOutButton />
      </div>
    </div>
  )
}

export default AdminItems
