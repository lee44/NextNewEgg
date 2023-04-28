import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../../templates/Button'

const SignInOutButton = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <span className='text-black dark:text-white'>Signed in as {session?.user?.name}</span>
        <Button text={'Sign Out'} url={''} onClick={() => signOut()} />
      </>
    )
  }
  return (
    <>
      <Button text={'Sign In'} url={'/auth/signin'} />
    </>
  )
}

export default SignInOutButton
