import { Product } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { Products } from '../../types/product'
import ProductCard from './ProductCard'

type ListingsProps = {
  products: Products[]
}

const Listings = ({ products }: ListingsProps) => {
  return (
    <div className='container'>
      {products.map((category) =>
        Object.keys(category).map((categoryKey, index) => (
          <div key={index} className='mb-16'>
            <h3 className='mt-0'>{categoryKey}</h3>
            <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
              {category[categoryKey].map((product, index) => {
                return (
                  <li key={index}>
                    <Link href={`/product/${product.productId}`}>
                      <ProductCard product={product} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}

export default Listings
