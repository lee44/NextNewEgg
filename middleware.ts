import { withAuth } from 'next-auth/middleware'

// Only works with JWT strategy
export default withAuth(
  function middleware(req) {
    console.log('Middleware Called')
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log('Middleware Callback', token)
        return true
      },
      // authorized: ({ token }) => token?.role === 'admin',
    },
  }
)

export const config = { matcher: ['/profile'] }
