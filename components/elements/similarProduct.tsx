import React from 'react'
import Image from 'next/image'
import { ProductBase } from '../../types/product'
import StarRating from './starrating'
import Link from 'next/link'

const SimilarProduct = ({ product }: ProductBase) => {
  return (
    <Link href={`/product/${product.productId}`}>
      <div className='flex flex-col items-center gap-3 w-[200px]'>
        {/* <Image src={product?.img ?? ''} alt='product' className='object-contain' fill /> */}
        <Image src={'/no-image.png'} alt='product' className='object-contain' width={150} height={150} />
        <StarRating stars={product.stars} />
        <h6>{product.name}</h6>
      </div>
    </Link>
  )
}

export default SimilarProduct
