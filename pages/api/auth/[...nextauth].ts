import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import prisma from '../../../prisma/lib/prisma'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
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
