import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import { authOptions } from './api/auth/[...nextauth]'

type AdminProps = {
  session: Session | null
}

// Admin will be able to modify user
const Admin = () => {
  const { data: session } = useSession({ required: true })

  return (
    <div>
      <h1>Admin</h1>
      <p>Welcome to the Admin Portal!</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    console.log('Redirecting to Sign In page from Admin Page')
    return { redirect: { destination: '/auth/signin', permanent: false } }
  } else if (session.user.role !== 'admin') {
    console.log('Redirecting to Home Page from Admin Page')
    return { redirect: { destination: '/', permanent: false } }
  }

  return {
    props: {  },
  }
}

export default Admin
