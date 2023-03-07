import { useRouter } from 'next/router'
import React from 'react'
import Nav from '../nav/nav'

const NoAuth = (props: { children: JSX.Element }) => {
  const { pathname } = useRouter()
  const noNav = ['/auth/signin', '/auth/signup', '/auth/error']

  const showNav = noNav.includes(pathname) ? false : true

  return (
    <>
      <div className=''>
        {showNav && <Nav />}
        {props.children}
      </div>
    </>
  )
}
export default NoAuth
