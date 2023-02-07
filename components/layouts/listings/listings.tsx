import { Product } from '@prisma/client'
import React from 'react'
import { Products } from '../../../types/products'
import Card from '../../templates/card'

type ListingsProps = {
  products: Products[]
}

const Listings: React.FunctionComponent<ListingsProps> = ({ products }) => {
  // console.log(products)

  return (
    <div className='container'>
      {products.map((category) =>
        Object.keys(category).map((categoryKey, index) => (
          <>
            <h3>{categoryKey}</h3>
            <ul key={index} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3	gap-4 auto-rows-fr'>
              {category[categoryKey].map((product, index) => {
                return (
                  <li key={index}>
                    <Card key={index} product={product} />
                  </li>
                )
              })}
            </ul>
          </>
        ))
      )}
    </div>
  )
}

export default Listings
