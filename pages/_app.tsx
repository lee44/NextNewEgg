import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
import { NextComponentType } from 'next'

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean } // add auth type
}
function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <SessionProvider
      session={pageProps.session}
      // Re-fetch session every 5 minutes
      // refetchInterval={5 * 60}
      // Disable Re-fetches session when window is focused
      // refetchOnWindowFocus={false}
    >
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

const Auth = (props: { children: JSX.Element }) => {
  // const { status } = useSession({ required: true })

  // if (status === 'loading') {
  //   return <div>Loading...</div>
  // }

  return props.children
}

export default MyApp
