import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { getSession, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import Overview from '../../components/layouts/dashboard/overview'
import SideBar from '../../components/layouts/dashboard/sidebar'
import { authOptions } from '../api/auth/[...nextauth]'

const Dashboard = () => {
  return (
    <div className='grid min-h-screen grid-cols-5 gap-16 p-4'>
      <SideBar />
      <Overview />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}

//Dashboard.auth = true

export default Dashboard
