import { Product } from '@prisma/client'
import Image from 'next/image'
import React, { ReactComponentElement } from 'react'
import Card from '../templates/Card'
import StarRating from '../ui/StarRating'

type ProductCard = {
  product: Product
}

const ProductCard = ({ product }: ProductCard) => {
  return (
    <Card additionalClasses={'grid grid-cols-2 gap-x-2'}>
      <>
        <ul className='flex flex-col justify-center gap-y-2'>
          <StarRating stars={product.stars || 0} />
          <li className='flex flex-col justify-center h-20'>
            <h6 className='text-left'>{product.name}</h6>
          </li>
          <li className='flex flex-col justify-center h-12'>
            <h3 className='m-0 text-left'>${product.price}</h3>
          </li>
          <li>
            <p className='h-6 m-0 italic text-left'>{product.free_shipping ? 'FREE SHIPPING' : ''}</p>
          </li>
        </ul>
        <div className='relative'>
          <Image
            src={product.img || ''}
            alt='product'
            className='object-contain xl:object-fill '
            fill
            sizes='max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              33vw'
          />
        </div>
      </>
    </Card>
  )
}

export default ProductCard
