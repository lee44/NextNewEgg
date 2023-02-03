import { GetServerSideProps } from 'next'
import React from 'react'
import prisma from '../../../prisma/lib/prisma'
import Sublisting from './sublisting'

const Listings = () => {
  return (
    <div>
      <h2>Computer Parts</h2>
      <Sublisting category={'CPU'} />
    </div>
  )
}

export default Listings
