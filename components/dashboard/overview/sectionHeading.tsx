import React from 'react'
import { IconType } from 'react-icons/lib'

const SectionHeading = ({ Icon, heading }: { Icon: IconType; heading: string }) => {
  return (
    <div className='flex items-center gap-4'>
      {<Icon color={'white'} size={30} />}
      <h4>{heading}</h4>
    </div>
  )
}

export default SectionHeading
