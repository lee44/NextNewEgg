import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import OauthButton from '../../components/templates/oauthbutton'
import ErrorMessage from '../../components/elements/errorMessage'
import Image from 'next/image'

export default function SignIn({ providers, error }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className='h-screen flex items-center justify-center bg-primary-bg'>
        <div className='flex flex-col justify-center items-center gap-y-4 border-1 p-12 rounded-md bg-card-bg'>
          <Image src={'/icons/newegg.png'} alt='product' className='' width={135} height={115} />
          <h5 className='text-white'>Sign In</h5>
          {error && <ErrorMessage message={error} />}
          {Object.values(providers).map((provider) => (
            <div className='' key={provider.name}>
              <OauthButton provider={provider} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: '/profile' } }
  }

  console.log(context.query)

  const providers = await getProviders()

  console.log(providers)

  return {
    props: { providers: Object.values(providers ?? {}), error: context?.query?.error || null },
  }
}
