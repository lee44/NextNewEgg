import { ClientSafeProvider, signIn } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

type OauthButton = {
  provider: ClientSafeProvider
}

const OauthButton = ({ provider }: OauthButton) => {
  let imgSrc = ''
  if (provider.name === 'GitHub') {
    imgSrc = '/icons/github.png'
  } else if (provider.name === 'Google') {
    imgSrc = '/icons/google.png'
  }
  return (
    <button
      className='w-full flex justify-end gap-x-10 text-white border-2 py-4 px-8 rounded-md hover:bg-button-hover hover:border-transparent'
      onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/profile' })}
    >
      <Image src={imgSrc} alt='icon' className='' width={25} height={25} />
      <span className='text-lg'>Sign in with {provider.name}</span>
    </button>
  )
}

export default OauthButton
