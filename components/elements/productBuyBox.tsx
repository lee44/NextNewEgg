import React from 'react'
import { ProductListingProps } from '../../pages/product/[id]'
import Button from '../templates/button'

const ProductBuyBox = ({ product }: ProductListingProps) => {
  const discountedPrice = product.price * product.discount

  return (
    <div className='bg-tertiary-bg p-4'>
      <ul>
        <li className='flex justify-center'>Sold and Shipped by {product.shipped_by}</li>
        <hr />
        <li>
          <span className='text-left line-through text-gray-400 text-lg'>${discountedPrice.toFixed(2)}</span>
          <h3 className='text-left'>${product.price.toFixed(2)}</h3>
        </li>
        <li>
          <Button text={'Add to Cart'} url={''} onClick={() => {}} />
        </li>
      </ul>
    </div>
  )
}

export default ProductBuyBox
