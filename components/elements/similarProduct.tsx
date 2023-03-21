import React from 'react'
import Image from 'next/image'
import { ProductBase } from '../../types/product'
import StarRating from './starrating'
import Link from 'next/link'

const SimilarProduct = ({ product }: ProductBase) => {
  return (
    <Link href={`/product/${product.productId}`}>
      <div className='flex flex-col items-center gap-3 w-[200px]'>
        <Image
          src={product?.img ?? '/no-image.png'}
          alt='product'
          className='max-h-[75px] min-h-[75px] object-contain'
          width={75}
          height={75}
        />
        <StarRating stars={product.stars} />
        <h6 className='max-w-[200px] whitespace-nowrap	overflow-hidden text-ellipsis dark:text-white'>{product.name}</h6>
      </div>
    </Link>
  )
}

export default SimilarProduct
