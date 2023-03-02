import type { NextFetchEvent, NextRequest } from 'next/server'
import { getSession } from 'next-auth/react'
import { NextResponse } from 'next/server'

export const middleware = async (req: NextRequest, ev: NextFetchEvent) => {
  // getSession accesses req.headers.cookie but the headers inside req: NextRequest are a Headers object
  // so we just provide an object that mimics this access behavior
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  }
  // @ts-ignore
  const session = await getSession({ req: requestForNextAuth })

  let signInUrl = new URL('/auth/signin', req.nextUrl.origin)
  signInUrl.searchParams.append('callbackUrl', req.url)

  console.log('Middleware Called')
  console.log('Session', session)

  if (!session) {
    return NextResponse.redirect(signInUrl)
  }

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (session?.user.role !== 'admin') {
      return NextResponse.redirect(signInUrl)
    }
  } else if (req.nextUrl.pathname.startsWith('/profile')) {
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/profile'],
}
