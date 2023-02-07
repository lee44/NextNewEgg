import { Product } from '@prisma/client'
import Image from 'next/image'
import React, { ReactComponentElement } from 'react'

type Card = {
  product: Product
}

const Card: React.FunctionComponent<Card> = ({ product }) => {
  return (
    <div className='grid grid-cols-2  bg-card-bg rounded-md md:p-5 p-4 h-full'>
      <ul className='flex flex-col justify-center '>
        <li>{product.stars}</li>
        <li>
          <h5 className='text-left'>{product.name}</h5>
        </li>
        <li>
          <h3 className='text-left'>${product.price}</h3>
        </li>
        <li>
          <p className='text-left italic'>{product.free_shipping ? 'FREE SHIPPING' : ''}</p>
        </li>
      </ul>
      <div className='relative h-full min-h-[125px]'>
        <Image src={product.img || ''} alt='product' className='object-contain' fill />
      </div>
    </div>
  )
}

export default Card
