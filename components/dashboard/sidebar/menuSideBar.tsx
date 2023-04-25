import React, { useState } from 'react'
import { sidebarDashboardItems } from '../../../constants/sidebarDashboardItems'
import IconLink from '../../ui/iconLink'
import { useRouter } from 'next/router'
import { FaArrowCircleLeft } from 'react-icons/fa'

const MenuSideBar = ({ setSidebar }: { setSidebar: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { pathname, query } = useRouter()

  return (
    <div className='flex flex-col min-h-full gap-4 p-4 rounded-lg bg-tertiary-bg'>
      <h5 className='text-white'>SideBar</h5>
      {sidebarDashboardItems.map((item, index) => {
        return (
          <IconLink
            key={index}
            href={item.href}
            icon={<item.icon size={20} className='min-w-[20px]' />}
            label={item.label}
            additionalClasses={
              pathname.includes(item.href) || item.href.includes(query.type as string) ? `text-button font-bold pointer-events-none` : ''
            }
          />
        )
      })}
      <div className='flex justify-center mt-auto'>
        <FaArrowCircleLeft
          color='white'
          size={30}
          className='cursor-pointer'
          onClick={() => {
            setSidebar((sidebar: boolean) => !sidebar)
          }}
        />
      </div>
    </div>
  )
}

export default MenuSideBar
