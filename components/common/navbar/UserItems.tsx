import React from 'react'
import DarkModeToggler from './DarkModeToggler'
import SignInOut from './SignInOutButton'

const UserItems = () => {
  return (
    <div className='flex items-center justify-between p-2 px-6'>
      <h2 className='sm:text-2xl'>NextNewegg</h2>
      <div className='flex items-center gap-6'>
        <DarkModeToggler />
        <SignInOut />
      </div>
    </div>
  )
}

export default UserItems
