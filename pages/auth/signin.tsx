import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import OauthButton from '../../components/templates/oauthbutton'

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(providers)
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center gap-y-4'>
        {Object.values(providers).map((provider) => (
          <div className='' key={provider.name}>
            <OauthButton provider={provider} />
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/profile' } }
  }

  const providers = await getProviders()

  return {
    props: { providers: Object.values(providers) ?? [] },
  }
}
