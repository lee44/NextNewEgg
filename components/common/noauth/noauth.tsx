import { useRouter } from 'next/router'
import React from 'react'
import Nav from '../navBar/nav'

const NoAuth = (props: { children: JSX.Element }) => {
  const { pathname } = useRouter()
  const noNav = ['/auth', '/admin']
  const showNav = !noNav.some((path) => pathname.includes(path))

  return (
    <>
      {showNav && <Nav />}
      <div className={`${showNav && 'mt-20'}`}>{props.children}</div>
    </>
  )
}
export default NoAuth
