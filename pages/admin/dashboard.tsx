import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import Overview from '../../components/layouts/dashboard/overview'
import SideBar from '../../components/layouts/dashboard/sidebar'
import { authOptions } from '../api/auth/[...nextauth]'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-6 p-4 gap-16 min-h-screen bg-secondary-bg'>
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
