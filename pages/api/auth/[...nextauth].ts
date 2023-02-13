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
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('Callback Signing in')
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('Callback redirect')
      return baseUrl
    },
    async session({ session, token, user }) {
      console.log('Callback session')
      return session
    },
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
      console.log('Successfully signed in', message.user, message?.account?.provider)
    },
    async signOut(message) {
      /* on signout */
      console.log('Successfully signed out', message)
    },
    async createUser(message) {
      /* user created */
      console.log('User created', message)
    },
    async updateUser(message) {
      /* user updated - e.g. their email was verified */
      console.log('User updated', message)
    },
    async linkAccount(message) {
      /* account (e.g. Twitter) linked to a user */
      console.log('Account linked', message)
    },
    async session(message) {
      /* session is active */
      console.log('Session is active', message)
    },
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  // debug: true,
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
