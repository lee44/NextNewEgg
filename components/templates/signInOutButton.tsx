import Link from 'next/link'
import React, { FunctionComponent } from 'react'

type ButtongProps = {
  text: string
  url: string
  onClick?: () => void
}
const Button: FunctionComponent<ButtongProps> = ({ text, url, onClick }) => {
  return (
    <Link className='p-3 rounded-md bg-button hover:bg-button-hover text-white' href={url} onClick={onClick}>
      {text}
    </Link>
  )
}

export default Button
