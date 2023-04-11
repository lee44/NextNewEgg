import Link from 'next/link'
import React, { FunctionComponent } from 'react'

type ButtongProps = {
  text: string
  url: string
  onClick?: () => void
  additionalClasses?: string
}

const Button = ({ text, url, onClick, additionalClasses }: ButtongProps) => {
  return (
    <Link
      className={`flex justify-center p-3 rounded-md bg-button hover:bg-button-hover text-white font-bold ${additionalClasses}`}
      href={url}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default Button
