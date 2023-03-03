import { Product } from '@prisma/client'
import Image from 'next/image'
import React, { ReactComponentElement } from 'react'
import StarRating from '../elements/starrating'

type Card = {
  product: Product
}

const Card = ({ product }: Card) => {
  return (
    <div className='grid grid-cols-2 bg-card-bg rounded-md md:p-5 p-4 h-full'>
      <ul className='flex flex-col justify-center gap-y-2'>
        <StarRating stars={product.stars || 0} />
        <li className='h-20 flex flex-col justify-center'>
          <h6 className='text-left dark:text-white'>{product.name}</h6>
        </li>
        <li className='h-12 flex flex-col justify-center'>
          <h3 className='m-0 text-left dark:text-white'>${product.price}</h3>
        </li>
        <li>
          <p className='h-6 m-0 text-left italic dark:text-white'>{product.free_shipping ? 'FREE SHIPPING' : ''}</p>
        </li>
      </ul>
      <div className='relative h-full'>
        <Image
          src={product.img || ''}
          alt='product'
          className='object-contain'
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
