import { ClientSafeProvider, signIn } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

type OauthButton = {
  provider: ClientSafeProvider
}

const OauthButton: React.FunctionComponent<OauthButton> = ({ provider }) => {
  let imgSrc = ''
  if (provider.name === 'GitHub') {
    imgSrc = '/icons/github.png'
  } else if (provider.name === 'Google') {
    imgSrc = '/icons/google.png'
  }
  return (
    <button
      className='flex justify-end gap-x-8 text-white border-2 p-4 rounded-md hover:bg-button-hover hover:border-transparent'
      onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/profile' })}
    >
      <Image src={imgSrc} alt='icon' className='pt-0.5' width={20} height={20} />
      <span>Sign in with {provider.name}</span>
    </button>
  )
}

export default OauthButton
