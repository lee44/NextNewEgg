import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(providers)
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className='text-black border-2 p-2 rounded-md' onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
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
