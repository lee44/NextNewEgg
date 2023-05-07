import React from 'react'
import DarkModeToggler from './DarkModeToggler'
import SignInOutButton from './SignInOutButton'
import { RxHamburgerMenu } from 'react-icons/rx'
const AdminItems = ({ sideBar, setSidebar }: { sideBar: boolean, setSidebar: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className='flex items-center justify-between p-2 px-6 min-h-[80px]'>
      <div>
        <RxHamburgerMenu size={25} className={`${sideBar ? 'block' : 'hidden'} dark:text-white cursor-pointer`} onClick={() => {
          setSidebar((sidebar: boolean) => !sidebar)
        }} />
      </div>
      <div className='flex items-center gap-6'>
        <DarkModeToggler />
        <SignInOutButton />
      </div>
    </div>
  )
}

export default AdminItems
