import React from 'react'
import Card from '../templates/card'

const SummaryCard = ({ title, icon, count }: { title: string; icon: JSX.Element; count: string }) => {
  return (
    <Card additionalClasses=''>
      <div className='flex items-center justify-between'>
        <div>
          <h6>{title}</h6>
          <h5>{count}</h5>
        </div>
        <div>{icon}</div>
      </div>
    </Card>
  )
}

export default SummaryCard
