import { GetServerSideProps } from 'next'
import React from 'react'
import Table from '../../components/templates/table'
import { serialize } from '../../utils/serialize'
import prisma from '../../prisma/lib/prisma'
import { Product, User } from '@prisma/client'
import { ParsedUrlQuery } from 'querystring'
import Pagination from '../../components/templates/pagination'

export type DataProp = {
  pages?: number
  data: User[] | Product[]
  type: string
}

export type QueryProp = {
  page?: string
  type?: string
}

const Data = (prop: DataProp) => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <Table data={prop.data} type={prop.type.charAt(0).toUpperCase() + prop.type.slice(1)} />
      <Pagination pages={prop.pages ?? 0} type={prop.type} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { type, page } = context.query as QueryProp
  let data, count, skip

  skip = (parseInt(page ?? '1') - 1) * 10

  switch (type) {
    case 'users':
      count = await prisma.user.count()
      data = serialize(await prisma.user.findMany({ skip: skip, take: 10 }))
      break
    case 'products':
      count = await prisma.product.count()
      data = serialize(await prisma.product.findMany({ skip: skip, take: 10 }))
      break
    default:
      count = await prisma.user.count()
      data = serialize(await prisma.user.findMany({ skip: skip, take: 10 }))
  }

  const pages = Math.ceil(count / 10)

  return {
    props: { pages: pages, data: data, type: type },
  }
}

Data.auth = true

export default Data
