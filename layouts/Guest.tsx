import { useRouter } from 'next/router'
import React from 'react'
import DarkModeToggler from '../components/common/navbar/darkmodetoggler'
import Navbar from '../components/common/navbar/navbar'
import SignInOut from '../components/common/navbar/SignInOutButton'
import UserItems from '../components/common/navbar/useritems'

const Guest = (props: { children: JSX.Element }) => {
  const { pathname } = useRouter()
  const noNav = ['/auth']
  const showNav = !noNav.some((path) => pathname.includes(path))

  return (
    <>
      {showNav && (
        <Navbar>
          <UserItems />
        </Navbar>
      )}
      <div className={`${showNav && 'mt-20'} min-h-screen dark:bg-primary-bg`}>{props.children}</div>
    </>
  )
}
export default Guest
