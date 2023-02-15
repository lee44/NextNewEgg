import React from 'react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import { GetServerSidePropsContext } from 'next'
import { useSession } from 'next-auth/react'

const Profile = () => {
  console.log('Profile Page is loaded')

  const { status } = useSession({
    required: true,
  })

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
