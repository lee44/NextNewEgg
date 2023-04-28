import React from 'react'
import { ProductListingProps } from '../../types/product'
import Box from '../templates/Box'
import Button from '../templates/Button'

const ProductBuyBox = ({ product }: ProductListingProps) => {
  const discountedPrice = product.price ?? 0 * (product.discount ?? 0)

  return (
    <Box additionalClasses={'my-0 bg-white'}>
      <ul>
        <li className='flex justify-center dark:text-white'>Sold and Shipped by {product.shipped_by}</li>
        <hr />
        <li>
          <span className='text-lg text-left text-gray-400 line-through'>${discountedPrice.toFixed(2)}</span>
          <h3 className='text-left'>${product?.price?.toFixed(2)}</h3>
        </li>
        <li>
          <Button text={'Add to Cart'} url={''} onClick={() => {}} />
        </li>
      </ul>
    </Box>
  )
}

export default ProductBuyBox
