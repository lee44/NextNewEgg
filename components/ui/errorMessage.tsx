import React from 'react'

type ErrorMessage = {
  message: string | string[],
}

const ErrorMessage: React.FC<ErrorMessage> = ({ message }) => {
  return <h6 className='text-red-500'>{message}</h6>
}

export default ErrorMessage
