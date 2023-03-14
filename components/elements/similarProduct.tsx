import React from 'react'
import Image from 'next/image'
import { ProductBase } from '../../types/product'
import StarRating from './starrating'

const SimilarProduct = ({ product }: ProductBase) => {
  return (
    <div className='flex flex-col items-center gap-3 w-[200px]'>
      {/* <Image src={product?.img ?? ''} alt='product' className='object-contain' fill /> */}
      <Image src={'/no-image.png'} alt='product' className='object-contain' width={150} height={150} />
      <StarRating stars={product.stars} />
      <h6>{product.name}</h6>
    </div>
  )
}

export default SimilarProduct
