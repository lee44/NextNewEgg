import {
  CaseFanSpecs,
  CaseSpecs,
  CPUFanSpecs,
  CPUSpecs,
  GPUSpecs,
  KeyboardSpecs,
  MotherboardSpecs,
  MouseSpecs,
  PowerSupplySpecs,
  Product,
  RAMSpecs,
  StorageSpecs,
} from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import prisma from '../../prisma/lib/prisma'
import Image from 'next/image'
import StarRating from '../../components/elements/starrating'
import Specs from '../../components/elements/specs'
import ProductBuyBox from '../../components/elements/productBuyBox'
import Carousel from '../../components/templates/carousel'

export type ProductListingProps = {
  product: Product & {
    PowerSupplySpecs?: PowerSupplySpecs
    CaseFanSpecs?: CaseFanSpecs
    RAMSpecs?: RAMSpecs
    MouseSpecs?: MouseSpecs
    KeyboardSpecs?: KeyboardSpecs
    CPUFanSpecs?: CPUFanSpecs
    CaseSpecs?: CaseSpecs
    StorageSpecs?: StorageSpecs
    CPUSpecs?: CPUSpecs
    GPUSpecs?: GPUSpecs
    MotherboardSpecs?: MotherboardSpecs
  }
  similarProducts?: Product[]
}

const ProductListing = ({ product, similarProducts }: ProductListingProps) => {
  return (
    <div className='h-screen dark:bg-secondary-bg flex flex-col gap-16'>
      <ul className='container xl:grid xl:grid-cols-4 xl:gap-4 flex flex-col gap-8 pt-8'>
        <li className='flex flex-col justify-start items-center col-span-1 relative'>
          <Image src={product.img || ''} alt='product' className='object-contain' width={325} height={150} />
        </li>
        <li className='col-span-2'>
          <div className='flex flex-col gap-y-3'>
            <h5 className='text-left'>{product?.full_name}</h5>
            <StarRating stars={product.stars} />
            <Specs product={product} />
          </div>
        </li>
        <li className='col-span-1'>
          <ProductBuyBox product={product} />
        </li>
      </ul>
      <Carousel product={product} similarProducts={similarProducts} />
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
    include: {
      CPUSpecs: true,
      PowerSupplySpecs: true,
      CaseFanSpecs: true,
      RAMSpecs: true,
      MouseSpecs: true,
      KeyboardSpecs: true,
      CPUFanSpecs: true,
      CaseSpecs: true,
      StorageSpecs: true,
      GPUSpecs: true,
      MotherboardSpecs: true,
    },
  })

  const similarProducts = await prisma.product.findMany({
    where: { categoryId: product?.categoryId },
  })

  const serializeProduct = JSON.parse(JSON.stringify(product))
  const serializeSimilarProducts = JSON.parse(JSON.stringify(similarProducts))

  return {
    props: { product: serializeProduct, similarProducts: serializeSimilarProducts },
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
