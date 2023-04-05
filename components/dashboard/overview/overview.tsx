import React from 'react'
import { SlGraph } from 'react-icons/sl'
import SummaryCard from './summaryCard'
import { DashboardType } from '../../../types/dashboard'
import { getOverViewItems } from '../../../constants/overViewItems'
import { FaUsers } from 'react-icons/fa'
import UserCard from './userCard'

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
                icon={<overViewItem.icon color={overViewItem.color} size={50} />}
                count={overViewItem.count?.toString()}
              />
            </li>
          )
        })}
      </ul>
      <div className='flex items-center gap-4 mt-4'>
        <FaUsers color='white' size={30} />
        <h4>Users</h4>
      </div>
      <ul className='grid grid-cols-1 gap-4 gap-x-8 lg:grid-cols-2 xl:grid-cols-3'>
        {props.users.map((user, index) => {
          return (
            <li key={index} className=''>
              <UserCard user={user} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Overview
