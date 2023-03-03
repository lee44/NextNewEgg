import { Product } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import prisma from '../../prisma/lib/prisma'
import Image from 'next/image'

type ProductListingProps = {
  product: Product
}

const ProductListing = ({ product }: ProductListingProps) => {
  return (
    <div className='dark:bg-secondary-bg'>
      <ul className='container grid xl:grid-cols-3 gap-2 pt-8'>
        <li className='h-screen flex flex-col justify-start items-center col-span-1 relative'>
          <Image src={product.img || ''} alt='product' className='object-contain' width={150} height={150} />
        </li>
        <li className='col-span-1'>
          <div>
            <h1>ProductListing</h1>
            <div>{product?.full_name}</div>
          </div>
        </li>
        <li className='col-span-1'></li>
      </ul>
    </div>
  )
}

interface ProductListingParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as ProductListingParams

  const product = await prisma.product.findFirst({
    where: { productId: id },
  })

  const serializeProduct = JSON.parse(JSON.stringify(product))

  return {
    props: { product: serializeProduct },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await prisma.product.findMany()

  const paths = products.map((product) => {
    return { params: { id: product.productId } }
  })
  return {
    paths,
    fallback: false,
  }
}

export default ProductListing
