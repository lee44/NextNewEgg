import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextApiHandler } from 'next'
import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import prisma from '../../../prisma/lib/prisma'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  session: {
    strategy: 'database',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 60,

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60,
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
}

const authHandler: NextApiHandler = async (req, res) => {
  if (req?.query?.nextauth?.includes('callback') && req.method === 'GET') {
    console.log('GET Request', req.body)
  } else if (req?.query?.nextauth?.includes('callback') && req.method === 'POST') {
    console.log('POST Request', req.body)
  }

  return await NextAuth(req, res, authOptions)
}
export default authHandler
