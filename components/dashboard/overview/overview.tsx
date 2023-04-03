import React from 'react'
import { SlGraph } from 'react-icons/sl'
import SummaryCard from './summaryCard'
import { DashboardType } from '../../../types/dashboard'
import { getOverViewItems } from '../../../constants/overViewItems'

const Overview = (props: DashboardType) => {
  const overViewItems = getOverViewItems(props)

  return (
    <div className='col-span-4 px-4 lg:col-span-5'>
      <div className='flex items-center gap-4'>
        <SlGraph color='white' size={30} />
        <h4>Overview</h4>
      </div>
      <ul className='grid grid-cols-2 gap-4 gap-x-8 lg:grid-cols-3 xl:grid-cols-4'>
        {overViewItems.map((overViewItem, index) => {
          return (
            <li key={index} className=''>
              <SummaryCard
                title={overViewItem.title}
                icon={<overViewItem.icon color={overViewItem.color} size={60} />}
                count={overViewItem.count?.toString()}
              />
            </li>
          )
        })}
      </ul>
      <div className='flex items-center gap-4'>
        <SlGraph color='white' size={30} />
        <h4>Users</h4>
      </div>
    </div>
  )
}

export default Overview
