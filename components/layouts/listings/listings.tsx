import { Product } from '@prisma/client'
import React from 'react'
import { Products } from '../../../types/products'
import Card from '../../templates/card'

type ListingsProps = {
  products: Products[]
}

const Listings = ({ products }: ListingsProps) => {
  return (
    <div className='container'>
      {products.map((category) =>
        Object.keys(category).map((categoryKey, index) => (
          <div key={index}>
            <h3 className='dark:text-white'>{categoryKey}</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3	gap-4 auto-rows-fr'>
              {category[categoryKey].map((product, index) => {
                return (
                  <li key={index}>
                    <Card product={product} />
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
