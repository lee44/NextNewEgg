import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../templates/signInOutButton'

const SignInOut = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session?.user?.name}
        <Button text={'Sign Out'} url={''} onClick={() => signOut()} />
      </>
    )
  }
  return (
    <>
      <Button text={'Sign Up'} url={'/auth/signup'} />
      <Button text={'Sign In'} url={'/auth/signin'} />
    </>
  )
}

export default SignInOut
