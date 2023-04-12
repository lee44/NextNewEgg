import React from 'react'
import { sidebarDashboardItems } from '../../../constants/sidebarDashboardItems'
import IconLink from '../../ui/iconLink'

const MenuSideBar = () => {
  return (
    <div className='flex-col min-h-full gap-4 p-4 rounded-lg md:flex bg-tertiary-bg'>
      <h5 className='text-white'>SideBar</h5>
      {sidebarDashboardItems.map((item, index) => {
        return <IconLink key={index} href={item.href} icon={<item.icon />} label={item.label} />
      })}
    </div>
  )
}

export default MenuSideBar
