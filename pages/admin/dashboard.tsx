import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import SideBar from '../../components/dashboard/sidebar/menuSideBar'
import { authOptions } from '../api/auth/[...nextauth]'
import prisma from '../../prisma/lib/prisma'
import { DashboardType } from '../../types/dashboard'
import { serialize } from '../../utils/serialize'
import MenuSideBar from '../../components/dashboard/sidebar/menuSideBar'
import Overview from '../../components/dashboard/overview/overview'

const Dashboard = (props: DashboardType) => {
  return (
    <div className='grid min-h-[calc(100vh-64px)] grid-cols-6 p-4 mt-16 gap-x-4 dark:bg-primary-bg'>
      <div className='hidden col-span-2 lg:col-span-1 md:block'>
        <MenuSideBar />
      </div>
      <div className='col-span-6 px-4 md:col-span-4 lg:col-span-5'>
        <Overview {...props} />
      </div>
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
