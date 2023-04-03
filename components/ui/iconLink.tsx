import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'

const IconLink = ({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) => {
  return (
    <Link href={href} className='p-2 text-white rounded-lg hover:bg-button-hover'>
      <div className='flex items-center gap-3'>
        {icon}
        {label}
      </div>
    </Link>
  )
}

export default IconLink
