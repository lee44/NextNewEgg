import { GetServerSideProps } from 'next'
import React from 'react'
import Table from '../../components/templates/table'
import { serialize } from '../../utils/serialize'
import prisma from '../../prisma/lib/prisma'
import { Product, User } from '@prisma/client'
import { ParsedUrlQuery } from 'querystring'

export type DataProp = {
  data: User[] | Product[]
  type: string
}

export interface DataQuery {}

const Data = (prop: DataProp) => {
  return (
    <div className=''>
      <Table data={prop.data} type={prop.type.charAt(0).toUpperCase() + prop.type.slice(1)} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { type } = context.query
  let data

  switch (type) {
    case 'users':
      data = serialize(await prisma.user.findMany())
      break
    case 'products':
      data = serialize(await prisma.product.findMany())
      break
    default:
      data = serialize(await prisma.user.findMany())
  }

  return {
    props: { data: data, type: type },
  }
}

export default Data
