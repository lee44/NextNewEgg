import Link from 'next/link'
import React, { FunctionComponent } from 'react'

type ButtongProps = {
  text: string
  url: string
}
const Button: FunctionComponent<ButtongProps> = ({ text, url }) => {
  return (
    <Link className='p-3 rounded-md bg-button hover:bg-button-hover text-white' href={url}>
      {text}
    </Link>
  )
}

export default Button
