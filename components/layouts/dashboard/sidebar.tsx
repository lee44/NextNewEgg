import React from 'react'
import { sidebarDashboardItems } from '../../../config/sidebarDashboardItems'
import Link from '../../templates/link'

const SideBar = () => {
  return (
    <div className='flex flex-col gap-4 col-span-2 p-4 rounded-lg bg-tertiary-bg'>
      <h5>SideBar</h5>
      {sidebarDashboardItems.map((item, index) => {
        return <Link key={index} href={item.href} icon={item.icon} label={item.label} />
      })}
    </div>
  )
}

export default SideBar
