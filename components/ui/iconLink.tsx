import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'

const IconLink = ({
  href,
  icon,
  label,
  additionalClasses,
}: {
  href: string
  icon: JSX.Element
  label: string
  additionalClasses?: string
}) => {
  return (
    <Link href={href} className={`text-white rounded-lg hover:bg-button-hover ${additionalClasses}`}>
      <div className='flex items-center gap-2 p-2 '>
        {icon}
        {label}
      </div>
    </Link>
  )
}

export default IconLink
