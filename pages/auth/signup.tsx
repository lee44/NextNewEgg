import React from 'react'
import Image from 'next/image'
import { ClientSafeProvider, getCsrfToken, getProviders } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import OauthButton from '../../components/ui/OAuthButton'
import CredentialForms from '../../components/common/authentication/CredentialForms'

type SignUpProps = {
  providers: ClientSafeProvider
  error: string | string[] | null
  csrfToken: string
}

const SignUp = ({ providers, error, csrfToken }: SignUpProps) => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='max-w-[400px] flex flex-col justify-center items-center gap-y-4 border-1 p-12 rounded-md bg-card-bg'>
          <Image src={'/icons/newegg.png'} alt='product' className='' width={135} height={115} priority />
          <h5 className=''>Sign Up</h5>
          <CredentialForms formType={'Sign Up'} fields={['Name', 'Email', 'Password']} csrfToken={csrfToken} />

          {Object.values(providers)
            .filter((provider) => provider.name !== 'Credentials')
            .map((provider) => (
              <div className='w-full' key={provider.name}>
                <OauthButton provider={provider} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()

  return {
    props: {
      providers: Object.values(providers ?? {}),
      csrfToken: (await getCsrfToken(context)) || null,
    },
  }
}

export default SignUp
