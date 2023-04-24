import React from 'react'
import SummaryCard from './summaryCard'
import { DashboardType } from '../../../types/dashboard'
import { getOverViewItems } from '../../../constants/overViewItems'
import { FaUsers } from 'react-icons/fa'
import UserCard from './userCard'
import Link from 'next/link'
import SectionHeading from './sectionHeading'
import { ProjectIcons } from '../../../constants/projectIcons'

const Overview = (props: DashboardType) => {
  const overViewItems = getOverViewItems(props)

  return (
    <>
      <SectionHeading Icon={ProjectIcons.overview} heading='Overview' />
      <ul className='grid grid-cols-3 gap-4 mb-8 gap-x-8 lg:grid-cols-4 xl:grid-cols-5'>
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
      <SectionHeading Icon={ProjectIcons.users} heading='Users' />
      <ul className='grid grid-cols-2 gap-4 gap-x-8 lg:grid-cols-3 xl:grid-cols-4'>
        {props.users.map((user, index) => {
          return (
            <Link key={index} href={`user/${user.id}`}>
              <li className=''>
                <UserCard user={user} />
              </li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}

export default Overview
