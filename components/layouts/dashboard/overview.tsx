import React from 'react'
import { SlGraph } from 'react-icons/sl'

const Overview = () => {
  return (
    <div className='col-span-3 xl:col-span-4'>
      <div className='flex items-center gap-4'>
        <SlGraph color='white' size={30} />
        <h4>Overview</h4>
      </div>
    </div>
  )
}

export default Overview
