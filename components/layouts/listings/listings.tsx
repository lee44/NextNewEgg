import { Product } from '@prisma/client'
import React from 'react'
import { Products } from '../../../pages'
import Card from '../../templates/card'

type ListingsProps = {
  products: Products[]
}

const Listings: React.FunctionComponent<ListingsProps> = ({ products }) => {
  console.log(products)

  return (
    <div className='container'>
      {products.map((category) =>
        Object.keys(category).map((categorykey, index) => {
          return (
            <ul key={index}>
              <h3>{categorykey}</h3>
              <li>
                {category[categorykey].map((product, index) => {
                  return <Card key={index} product={product} />
                })}
              </li>
            </ul>
          )
        })
      )}
    </div>
  )
}

export default Listings
