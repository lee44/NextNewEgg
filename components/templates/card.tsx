import { Product } from '@prisma/client'
import Image from 'next/image'
import React, { ReactComponentElement } from 'react'

type Card = {
  product: Product
}

const Card = ({ product }: Card) => {
  return (
    <div className='grid grid-cols-2  bg-card-bg rounded-md md:p-5 p-4 h-full'>
      <ul className='flex flex-col justify-center '>
        <li className='dark:text-white'>{product.stars}</li>
        <li>
          <h5 className='text-left dark:text-white'>{product.name}</h5>
        </li>
        <li>
          <h3 className='text-left dark:text-white'>${product.price}</h3>
        </li>
        <li>
          <p className='text-left italic dark:text-white'>{product.free_shipping ? 'FREE SHIPPING' : ''}</p>
        </li>
      </ul>
      <div className='relative h-full min-h-[125px]'>
        <Image src={product.img || ''} alt='product' className='object-contain' fill sizes='max-width:200px' />
      </div>
    </div>
  )
}

export default Card
