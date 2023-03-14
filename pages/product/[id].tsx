import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import prisma from '../../prisma/lib/prisma'
import Image from 'next/image'
import StarRating from '../../components/elements/starrating'
import Specs from '../../components/elements/specs'
import ProductBuyBox from '../../components/elements/productBuyBox'
import Carousel from '../../components/templates/carousel'
import { ProductListingProps } from '../../types/product'

const ProductListing = ({ product, similarProducts }: ProductListingProps) => {
  return (
    <div className='min-h-screen dark:bg-secondary-bg flex flex-col gap-16'>
      <div className='container pb-2'>
        <ul className='xl:grid xl:grid-cols-4 xl:gap-4 flex flex-col gap-8 pt-8'>
          <li className='flex flex-col justify-start items-center xl:col-span-1 relative'>
            {/* <Image src={product.img || ''} alt='product' className='object-contain' width={325} height={150} /> */}
            <Image src={'/no-image.png'} alt='product' className='object-contain' width={325} height={150} />
          </li>
          <li className='xl:col-span-2'>
            <div className='flex flex-col gap-y-3'>
              <h5 className='text-left'>{product?.full_name}</h5>
              <StarRating stars={product.stars} />
              <Specs product={product} />
            </div>
          </li>
          <li className='xl:col-span-1 xl:w-full'>
            <ProductBuyBox product={product} />
          </li>
        </ul>
        <h4 className='uppercase text-start mt-16'>Products related to this item</h4>
        <Carousel product={product} similarProducts={similarProducts} />
      </div>
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
    where: { categoryId: product?.categoryId, productId: { not: product?.productId } },
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
