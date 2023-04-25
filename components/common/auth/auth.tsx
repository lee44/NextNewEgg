import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import DarkModeToggler from '../navbar/darkmodetoggler'
import Nav from '../navbar/nav'

const Auth = ({ children }: { children: JSX.Element }) => {
  const { status } = useSession({ required: true })
  const [sideBar, setSidebar] = useState(true)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className='min-w-[368px]'>
      <Nav>
        <DarkModeToggler />
      </Nav>
      {children}
    </div>
  )
}

export default Auth
