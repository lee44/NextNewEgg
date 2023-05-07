import { useRouter } from 'next/router'
import React from 'react'
import DarkModeToggler from '../components/common/navbar/darkmodetoggler'
import NavBar from '../components/common/navbar/NavBar'
import SignInOut from '../components/common/navbar/SignInOutButton'
import UserItems from '../components/common/navbar/UserItems'

const Guest = (props: { children: JSX.Element }) => {
  const { pathname } = useRouter()
  const noNav = ['/auth']
  const showNav = !noNav.some((path) => pathname.includes(path))

  return (
    <>
      {showNav && (
        <NavBar>
          <UserItems />
        </NavBar>
      )}
      <div className={`${showNav && 'mt-20'} min-h-screen dark:bg-primary-bg`}>{props.children}</div>
    </>
  )
}
export default Guest
