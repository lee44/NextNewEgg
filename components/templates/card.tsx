import { Product } from '@prisma/client'
import Image from 'next/image'
import React, { ReactComponentElement } from 'react'
import StarRating from '../elements/starrating'

type Card = {
  product: Product
}

const Card = ({ product }: Card) => {
  return (
    <div className='grid grid-cols-2 bg-[#ECF1FE] dark:bg-card-bg rounded-md md:p-5 p-4 h-full gap-x-2'>
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
    </div>
  )
}

export default Card
