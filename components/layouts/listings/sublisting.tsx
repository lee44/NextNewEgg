import { Product } from '@prisma/client'
import React from 'react'

type Sublisting = {
  products: Product[]
}

const Sublisting = (products:Product[] ) => {
  return (
    <div>
      <h3>{products[0].name}</h3>
    </div>
  )
}

export default Sublisting
