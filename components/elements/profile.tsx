import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../templates/signInOutButton'

const Profile = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session?.user?.name}
        <Button text={'Sign Out'} url={'/signout'} />
      </>
    )
  }
  return (
    <>
      <Button text={'Log In'} url={'/signin'} />
    </>
  )
}

export default Profile
