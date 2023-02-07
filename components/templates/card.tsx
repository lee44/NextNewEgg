import { Product } from '@prisma/client'
import React, { ReactComponentElement } from 'react'

type Card = {
  product: Product
}

const Card: React.FunctionComponent<Card> = ({ product }) => {
  return (
    <div className='bg-card-bg rounded-md md:p-5 p-4 border-[1px]'>
      <ul>
        <li>{product.stars}</li>
        <li>{product.name}</li>
        <li>{product.price}</li>
        <li>{product.free_shipping}</li>
      </ul>
    </div>
  )
}

export default Card
