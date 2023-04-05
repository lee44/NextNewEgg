import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import Overview from '../../components/dashboard/overview/overview'
import SideBar from '../../components/dashboard/sidebar/sidebar'
import { authOptions } from '../api/auth/[...nextauth]'
import prisma from '../../prisma/lib/prisma'
import { DashboardType } from '../../types/dashboard'
import { serialize } from '../../utils/serialize'

const Dashboard = (props: DashboardType) => {
  return (
    <div className='grid min-h-screen min-w-[768px] grid-cols-6 p-4 gap-x-8'>
      <SideBar />
      <Overview {...props} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await prisma.user.findMany()
  const products = await prisma.product.count()
  const sessions = await prisma.session.count()
  const carts = await prisma.cart.count()
  const cartItems = await prisma.cartItems.count()

  return {
    props: { users: users, products: products, sessions: sessions, carts: carts, cartItems: cartItems },
  }
}

//Dashboard.auth = true

export default Dashboard
