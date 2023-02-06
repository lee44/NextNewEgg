import { Product } from '@prisma/client'
import React from 'react'

type ListingsProps = {
  products: Product[]
}

const Listings: React.FunctionComponent<ListingsProps> = ({ products }) => {
  console.log(products)

  return (
    <div>
      <h2>Computer Parts</h2>
      {/* <Sublisting products={products} /> */}
    </div>
  )
}

export default Listings
