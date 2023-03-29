import React from 'react'
import { SlGraph } from 'react-icons/sl'
import SummaryCard from '../../elements/summaryCard'
import Box from '../../templates/box'

const Overview = () => {
  return (
    <div className='col-span-3 xl:col-span-4'>
      <div className='flex items-center gap-4'>
        <SlGraph color='white' size={30} />
        <h4>Overview</h4>
      </div>
      <ul className='flex gap-x-4'>
        <li>
          <SummaryCard title='Users' count='5'></SummaryCard>
        </li>
        <li>
          <SummaryCard title='Products' count='5'></SummaryCard>
        </li>
      </ul>
    </div>
  )
}

export default Overview
