import React from 'react'

const Box = (props: { children: JSX.Element; additionalClasses?: string }) => {
  return (
    <div className={`my-10 p-8 dark:bg-tertiary-bg border-[1px] dark:border-[#555] shadow-lg ${props.additionalClasses}`}>
      {props.children}
    </div>
  )
}

export default Box
