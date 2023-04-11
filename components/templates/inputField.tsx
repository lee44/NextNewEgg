import { User } from '@prisma/client'
import React from 'react'

const InputField = ({ label, value, disabled }: { label: string; value: string | null; disabled?:boolean }) => {
  return (
    <div>
      <label className='block mb-2 text-white'>{label}</label>
      <input className='w-[300px] p-2 rounded-sm' type='text' value={value ?? ''} disabled={disabled}/>
    </div>
  )
}

export default InputField
