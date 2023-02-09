import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/react'

const Profile = () => {
  const { status } = useSession({
    required: true,
  })

  return <div>Profile</div>
}

export default Profile
