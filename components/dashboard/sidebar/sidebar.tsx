import React from 'react'
import { sidebarDashboardItems } from '../../../constants/sidebarDashboardItems'
import IconLink from '../../ui/iconLink'

const SideBar = () => {
  return (
    <div className='flex-col col-span-2 gap-4 p-4 rounded-lg md:flex lg:col-span-1 bg-tertiary-bg'>
      <h5 className='text-white'>SideBar</h5>
      {sidebarDashboardItems.map((item, index) => {
        return <IconLink key={index} href={item.href} icon={<item.icon />} label={item.label} />
      })}
    </div>
  )
}

export default SideBar
