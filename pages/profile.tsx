import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { Session } from 'next-auth'

type ProfileProps = {
  session: Session | null
}

const Profile = ({ session }: ProfileProps) => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    console.log('Redirecting to SignIn page from Profile Page')
    return { redirect: { destination: '/auth/signin', permanent: false } }
  }

  return {
    props: { session: session },
  }
}

export default Profile
