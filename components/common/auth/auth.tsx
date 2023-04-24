import { useSession } from 'next-auth/react'
import React from 'react'
import DarkModeToggler from '../navbar/darkmodetoggler'
import Nav from '../navbar/nav'

const Auth = (props: { children: JSX.Element }) => {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className='min-w-[368px]'>
      <Nav>
        <DarkModeToggler />
      </Nav>
      {props.children}
    </div>
  )
}

export default Auth
