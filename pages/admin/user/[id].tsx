import { User } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import SectionHeading from '../../../components/dashboard/overview/sectionHeading'
import InputField from '../../../components/templates/inputField'
import Card from '../../../components/templates/card'
import { ProjectIcons } from '../../../constants/projectIcons'
import prisma from '../../../prisma/lib/prisma'
import { serialize } from '../../../utils/serialize'
import Image from 'next/image'
import Button from '../../../components/templates/button'

const UserListing = ({ user }: { user: User }) => {
  return (
    <div className='container min-h-screen min-w-[768px]'>
      <SectionHeading heading='Profile' Icon={ProjectIcons.profile} />
      <Card>
        <div className='flex items-center gap-16 p-8'>
          <Image src={'/no-image.png'} alt={'user_profile_image'} width={300} height={300} className='min-h-[300px] rounded-full' />
          <div className='grid grid-cols-2 gap-6'>
            <InputField label='Name' value={user.name} />
            <InputField label='Email' value={user.email} />
            <InputField label='Current Password' value={user.password} />
            <InputField label='Role' value={user.role} disabled />
            <Button text='Save' url='' additionalClasses='' />
          </div>
        </div>
      </Card>
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
