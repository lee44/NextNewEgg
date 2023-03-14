import React from 'react'

const Box = (props: { children: JSX.Element; additionalClasses?: string }) => {
  return <div className={`my-10 p-8 bg-tertiary-bg border-[1px] border-[#555] ${props.additionalClasses}`}>{props.children}</div>
}

export default Box
