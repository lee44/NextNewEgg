import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import prisma from '../../prisma/lib/prisma'
import { Product, User, Session as Sessions } from '@prisma/client'
import { serialize } from '../../utils/serialize'
import MenuSideBar from '../../components/dashboard/aside/AsideMenu'
import Overview from '../../layouts/Overview'

export type DashboardType = {
  users: User[]
  products: number
  sessions: number
  carts: number
  cartItems: number
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Dashboard = (props: DashboardType) => {
  return (
    <div className='min-h-[calc(100vh-64px)] p-4 mt-16 dark:bg-primary-bg'>
      <Overview {...props} />
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
