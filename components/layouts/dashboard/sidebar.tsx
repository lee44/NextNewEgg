import React from 'react'
import { sidebarDashboardItems } from '../../../config/sidebarDashboardItems'
import Link from '../../templates/link'

const SideBar = () => {
  return (
    <div className='flex-col hidden col-span-2 gap-4 p-4 rounded-lg md:flex lg:col-span-1 bg-tertiary-bg'>
      <h5 className='text-white'>SideBar</h5>
      {sidebarDashboardItems.map((item, index) => {
        return <Link key={index} href={item.href} icon={<item.icon />} label={item.label} />
      })}
    </div>
  )
}

export default SideBar
