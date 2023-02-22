import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/react'

const Profile = () => {
  console.log('Profile Page is loaded')

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // @ts-ignore
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    console.log('Redirecting to Sign In page')

    return { redirect: { destination: '/auth/signin', permanent: false } }
  }

  return {
    props: {},
  }
}

export default Profile
