import React from 'react'
import DarkModeToggler from './DarkModeToggler'
import SignInOutButton from './SignInOutButton'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SideBarProp } from '../../../layouts/Authenticated'

const AdminItems = ({ hideSideBar, setHideSideBar }: SideBarProp) => {
  return (
    <div className='flex items-center justify-between p-2 px-6 min-h-[80px]'>
      <div>
        <RxHamburgerMenu size={25} className={`xl:hidden dark:text-white cursor-pointer ${hideSideBar ? 'block' : 'xl:hidden'}`} onClick={() => {
          setHideSideBar((hideSideBar: boolean) => !hideSideBar)
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
