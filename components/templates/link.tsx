import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons/lib'

const Links = ({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) => {
  return (
    <Link href={href} className='p-2 rounded-lg text-white hover:bg-button-hover'>
      <>
        {icon} {label}
      </>
    </Link>
  )
}

export default Links
