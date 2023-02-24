import type { NextFetchEvent, NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  console.log('Middleware Called')

  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  }

  // @ts-ignore
  const session = await getSession({ req: requestForNextAuth })
  console.log(session)

  if (!session) {
    redirectToSignIn(req)
  }

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (session?.user.role !== 'admin') {
      redirectToSignIn(req)
    }
  } else if (req.nextUrl.pathname.startsWith('/profile')) {
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/profile'],
}

const redirectToSignIn = (req: NextRequest) => {
  const signInPage = '/auth/signin'
  const signInUrl = new URL(signInPage, req.nextUrl.origin)
  signInUrl.searchParams.append('callbackUrl', req.url)
  return NextResponse.redirect(signInUrl)
}
