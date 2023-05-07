import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import prisma from '../../prisma/lib/prisma'
import { Product, User, Session as Sessions } from '@prisma/client'
import { serialize } from '../../utils/serialize'
import { getOverViewItems } from '../../constants/overViewItems'
import SectionHeading from '../../components/dashboard/overview/SectionHeading'
import SummaryCard from '../../components/dashboard/overview/SummaryCard'
import UserCard from '../../components/dashboard/overview/UserCard'
import { ProjectIcons } from '../../constants/projectIcons'

export type DashboardType = {
  users: User[]
  products: number
  sessions: number
  carts: number
  cartItems: number
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Dashboard = (props: DashboardType) => {
  const overViewItems = getOverViewItems(props)

  return (
    <div className='dark:bg-primary-bg'>
      <SectionHeading Icon={ProjectIcons.overview} heading='Overview' />
      <ul className='grid grid-cols-1 gap-2 mb-4 md:grid-cols-2 md:gap-4 md:gap-x-8 lg:grid-cols-3 xl:grid-cols-4'>
        {overViewItems.map((overViewItem, index) => {
          return (
            <li key={index} className=''>
              <SummaryCard
                title={overViewItem.title}
                icon={<overViewItem.icon color={overViewItem.color} size={40} />}
                count={overViewItem.count?.toString()}
              />
            </li>
          )
        })}
      </ul>
      <SectionHeading Icon={ProjectIcons.users} heading='Users' />
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = serialize(await prisma.user.findMany())
  const products = await prisma.product.count()
  const sessions = await prisma.session.count()
  const carts = await prisma.cart.count()
  const cartItems = await prisma.cartItems.count()

  return {
    props: { users: users, products: products, sessions: sessions, carts: carts, cartItems: cartItems },
  }
}

Dashboard.auth = true

export default Dashboard
