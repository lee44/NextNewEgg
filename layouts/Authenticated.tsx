import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import AsideMenu from '../components/dashboard/aside/AsideMenu'
import Navbar from '../components/common/navbar/NavBar'
import AdminItems from '../components/common/navbar/AdminItems'

export type SideBarProp = {
  hideSideBar: boolean
  setHideSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const Authenticated = ({ children }: { children: JSX.Element }) => {
  const { status } = useSession({ required: true })
  const [hideSideBar, setHideSideBar] = useState(false)

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='min-w-[368px] min-h-screen'>
        {hideSideBar && <div className='absolute inset-0 bg-gray-600 opacity-75'></div>}
        <Navbar>
          <AdminItems hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
        </Navbar>
        <div className='grid grid-cols-7 p-4 mt-20 gap-x-8'>
          <div className={`${hideSideBar ? 'absolute' : 'hidden col-span-1 xl:block'}`}>
            <AsideMenu hideSideBar={hideSideBar} setHideSideBar={setHideSideBar} />
          </div>
          <div className={`${hideSideBar ? 'col-span-7' : 'col-span-7 xl:col-span-6'}`}>
            {children}
          </div>
        </div>

      </div>
    </>
  )
}

export default Authenticated
