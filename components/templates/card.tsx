import React from 'react'

const Card = (props: { children: JSX.Element; additionalClasses?: string }) => {
  return (
    <div className={`bg-[#ECF1FE] dark:bg-card-bg rounded-md md:p-5 p-4 h-full ${props.additionalClasses}`}>
      {props.children}
    </div>
  )
}

export default Card
