import { GetServerSideProps } from 'next'
import React from 'react'
import Table from '../../components/templates/table'
import { serialize } from '../../utils/serialize'
import prisma from '../../prisma/lib/prisma'
import { User } from '@prisma/client'

const Users = ({ users }: { users: User[] }) => {
  return (
    <div className=''>
      <Table data={users} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = serialize(await prisma.user.findMany())

  return {
    props: { users: users },
  }
}

export default Users
