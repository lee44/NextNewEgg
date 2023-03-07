import { Product } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import prisma from '../../prisma/lib/prisma'
import Image from 'next/image'
import StarRating from '../../components/elements/starrating'
import Specs from '../../components/elements/specs'
import { Case, CaseFan, CPU, CPUFan, GPU, Keyboard, Motherboard, Mouse, PowerSupply, RAM } from '../../types/product'

export type ProductListingProps = {
  product: Product & {
    PowerSupplySpecs?: PowerSupply
    CaseFanSpecs?: CaseFan
    RAMSpecs?: RAM
    MouseSpecs?: Mouse
    KeyboardSpecs?: Keyboard
    CPUFanSpecs?: CPUFan
    CaseSpecs?: Case
    StorageSpecs?: Storage
    CPUSpecs?: CPU
    GPUSpecs?: GPU
    MotherboardSpecs?: Motherboard
  }
}

const ProductListing = ({ product }: ProductListingProps) => {
  console.log(product.CPUSpecs)

  return (
    <div className='dark:bg-secondary-bg'>
      <ul className='container grid xl:grid-cols-3 gap-2 pt-8'>
        <li className='h-screen flex flex-col justify-start items-center col-span-1 relative'>
          <Image src={product.img || ''} alt='product' className='object-contain' width={350} height={150} />
        </li>
        <li className='col-span-1'>
          <div>
            <h5>{product?.full_name}</h5>
            <StarRating stars={product.stars} />
            <Specs product={product} />
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
