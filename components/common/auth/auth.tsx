import { useSession } from 'next-auth/react'
import React from 'react'

const Auth = (props: { children: JSX.Element }) => {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return <div className='min-h-screen bg-primary-bg'>{props.children}</div>
}

export default Auth
