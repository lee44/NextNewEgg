import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import AsideMenu from '../components/dashboard/aside/AsideMenu'
import Navbar from '../components/common/navbar/NavBar'
import AdminItems from '../components/common/navbar/AdminItems'

const Authenticated = ({ children }: { children: JSX.Element }) => {
  const { status } = useSession({ required: true })
  const [sideBar, setSidebar] = useState(false)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className='min-w-[368px] min-h-screen'>
      <Navbar>
        <AdminItems sideBar={sideBar} setSidebar={setSidebar}/>
      </Navbar>
      <div className='grid grid-cols-7 p-4 mt-20 gap-x-8'>
        <div className={`${sideBar ? 'hidden' : 'hidden col-span-1 xl:block'}`}>
          <AsideMenu setSidebar={setSidebar} />
        </div>
        <div className={`${sideBar ? 'col-span-7' : 'col-span-7 xl:col-span-6'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Authenticated
