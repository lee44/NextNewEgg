import { useRouter } from 'next/router'
import React from 'react'
import SideBar from '../../dashboard/sidebar/menuSideBar'
import Nav from '../navbar/nav'

const NoAuth = (props: { children: JSX.Element }) => {
  const { pathname } = useRouter()
  const noNav = ['/auth']
  const showNav = !noNav.some((path) => pathname.includes(path))

  return (
    <>
      {showNav && <Nav />}
      <div className={`${showNav && 'mt-20'} min-h-screen dark:bg-primary-bg`}>{props.children}</div>
    </>
  )
}
export default NoAuth
