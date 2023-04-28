import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { NextComponentType } from 'next'
import { useEffect } from 'react'
import { ThemeContextProvider } from '../store/themeContext'
import Authenticated from '../layouts/Authenticated'
import Guest from '../layouts/Guest'

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
      <ThemeContextProvider>
        {Component.auth ? (
          <Authenticated>
            <Component {...pageProps} />
          </Authenticated>
        ) : (
          <Guest>
            <Component {...pageProps} />
          </Guest>
        )}
      </ThemeContextProvider>
    </SessionProvider>
  )
}

export default MyApp
