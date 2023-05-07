import React from 'react'

const NavBar = (props: { children: JSX.Element | JSX.Element[] }) => {
  return <nav className='fixed top-0 z-50 w-screen bg-white shadow-md dark:bg-primary'>{props.children}</nav>
}

export default NavBar
