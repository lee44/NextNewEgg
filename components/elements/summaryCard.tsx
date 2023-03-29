import React from 'react'
import Card from '../templates/card'

const SummaryCard = ({ title, count }: { title: string; count: string }) => {
  return (
    <Card>
      <>
        <div>
          <h6>{title}</h6>
          <h5>{count}</h5>
        </div>
      </>
    </Card>
  )
}

export default SummaryCard
