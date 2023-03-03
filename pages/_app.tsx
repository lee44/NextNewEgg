import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
import { NextComponentType } from 'next'
import Nav from '../components/layouts/nav/nav'
import Auth from '../components/layouts/auth/auth'
import NoAuth from '../components/layouts/noauth/noauth'

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
        <NoAuth>
          <Component {...pageProps} />
        </NoAuth>
      )}
    </SessionProvider>
  )
}

export default MyApp
