import { NextPage } from 'next'
import React from 'react'

type Sublisting = {
  category: string
}

const Sublisting: NextPage<Sublisting> = ({ category }) => {
  return (
    <div>
      <h3 className='text-black dark:text-white'>{category}</h3>
    </div>
  )
}

export default Sublisting
