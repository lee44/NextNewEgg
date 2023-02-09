import { ClientSafeProvider, signIn } from 'next-auth/react'
import React from 'react'

type OauthButton = {
  provider: ClientSafeProvider
}

const OauthButton: React.FunctionComponent<OauthButton> = ({ provider }) => {
  return (
    <button
      className='text-black border-2 p-4 rounded-md hover:bg-button-hover hover:border-transparent'
      onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/profile' })}
    >
      Sign in with {provider.name}
    </button>
  )
}

export default OauthButton
