import { useRouter } from 'next/router'
import React from 'react'
import NavBar from '../components/common/navbar/NavBar'
import SignInOut from '../components/common/navbar/SignInOutButton'
import UserUI from '../components/common/navbar/UserUI'

const Guest = (props: { children: JSX.Element }) => {
  const { pathname } = useRouter()
  const noNav = ['/auth']
  const showNav = !noNav.some((path) => pathname.includes(path))

  return (
    <>
      {showNav && (
        <NavBar>
          <UserUI />
        </NavBar>
      )}
      <div className={`${showNav && 'mt-[65px]'} min-h-screen dark:bg-primary-bg`}>{props.children}</div>
    </>
  )
}
export default Guest
