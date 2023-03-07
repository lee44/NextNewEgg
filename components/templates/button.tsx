import Link from 'next/link'
import React, { FunctionComponent } from 'react'

type ButtongProps = {
  text: string
  url: string
  onClick?: () => void
}

const Button = ({ text, url, onClick }: ButtongProps) => {
  return (
    <Link className='flex justify-center p-3 rounded-md bg-button hover:bg-button-hover text-white font-bold' href={url} onClick={onClick}>
      {text}
    </Link>
  )
}

export default Button
