import { useSession } from 'next-auth/react'
import React from 'react'
import MenuSideBar from '../../dashboard/sidebar/menuSideBar'

const Auth = (props: { children: JSX.Element }) => {
  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className='grid min-h-screen min-w-[768px] grid-cols-6 p-4 gap-x-8 bg-primary-bg'>
      <div className='col-span-2 lg:col-span-1'>
        <MenuSideBar />
      </div>
      <div className='col-span-4 px-4 lg:col-span-5'>{props.children}</div>
    </div>
  )
}

export default Auth
