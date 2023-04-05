import { User } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import SectionHeading from '../../../components/dashboard/overview/sectionHeading'
import { ProjectIcons } from '../../../constants/projectIcons'
import prisma from '../../../prisma/lib/prisma'
import { serialize } from '../../../utils/serialize'

const UserListing = ({ user }: { user: User }) => {
  return (
    <div className='min-h-screen min-w-[768px]'>
      <SectionHeading heading='Profile' Icon={ProjectIcons.profile} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as ParsedUrlQuery

  const user = await prisma.user.findFirst({
    where: { id: id as string },
  })

  return {
    props: { user: serialize(user) },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await prisma.user.findMany()

  const paths = users.map((user) => {
    return { params: { id: user.id } }
  })
  return {
    paths,
    fallback: false,
  }
}

export default UserListing
