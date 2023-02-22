import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import React from 'react'
import { authOptions } from './api/auth/[...nextauth]'

type AdminProps = {
  session: Session | null
}

// Admin will be able to modify user
const Admin = ({ session }: AdminProps) => {
  if (session && session.user.role === 'admin') {
    return (
      <div>
        <h1>Admin</h1>
        <p>Welcome to the Admin Portal!</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page!</h1>
      </div>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // @ts-ignore
  const session = await getServerSession(context.req, context.res, authOptions)

  //   if (!session) {
  //     console.log('Redirecting to Sign In page')
  //     return { redirect: { destination: '/auth/signin', permanent: false } }
  //   }

  console.log(session)

  return {
    props: { session: session },
  }
}

export default Admin
