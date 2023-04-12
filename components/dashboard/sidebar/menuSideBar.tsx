import React from 'react'
import { sidebarDashboardItems } from '../../../constants/sidebarDashboardItems'
import IconLink from '../../ui/iconLink'
import { useRouter } from 'next/router'

const MenuSideBar = () => {
  const { pathname, query } = useRouter()

  return (
    <div className='flex-col min-h-full gap-4 p-4 rounded-lg md:flex bg-tertiary-bg'>
      <h5 className='text-white'>SideBar</h5>
      {sidebarDashboardItems.map((item, index) => {
        return (
          <IconLink
            key={index}
            href={item.href}
            icon={<item.icon className='min-w-[30px]' />}
            label={item.label}
            additionalClasses={
              pathname.includes(item.href) || item.href.includes(query.type as string)
                ? `text-button font-bold hover:bg-tertiary-bg pointer-events-none`
                : ''
            }
          />
        )
      })}
    </div>
  )
}

export default MenuSideBar
