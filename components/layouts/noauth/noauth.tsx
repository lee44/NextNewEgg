import { useRouter } from 'next/router'
import React from 'react'
import Nav from '../nav/nav'

const NoAuth = (props: { children: JSX.Element }) => {
  const { pathname } = useRouter()
  const noNav = ['/auth/signin', '/auth/signup', '/auth/error']

  const showNav = noNav.includes(pathname) ? false : true

  return (
    <>
      {showNav && <Nav />}
      <div className='mt-20'>{props.children}</div>
    </>
  )
}
export default NoAuth
