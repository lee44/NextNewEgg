import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import AsideMenu from '../components/dashboard/aside/AsideMenu'
import Navbar from '../components/common/navbar/NavBar'
import AdminItems from '../components/common/navbar/AdminItems'

const Authenticated = ({ children }: { children: JSX.Element }) => {
  const { status } = useSession({ required: true })
  const [sideBar, setSidebar] = useState(true)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className='min-w-[368px]'>
      <Navbar>
        <AdminItems />
      </Navbar>
      <AsideMenu setSidebar={setSidebar} />
      {children}
    </div>
  )
}

export default Authenticated
