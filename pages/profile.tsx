import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { GetServerSidePropsContext } from 'next'

const Profile = () => {
  return <div>Profile</div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return { redirect: { destination: '/auth/signin' } }
  }

  return {
    props: {},
  }
}

export default Profile
