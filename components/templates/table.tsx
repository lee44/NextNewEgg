import React from 'react'
import SectionHeading from '../dashboard/overview/sectionHeading'
import { BsTable } from 'react-icons/bs'
import { Product, User } from '@prisma/client'
import { DataProp } from '../../pages/admin/data'

const Table = (prop: DataProp) => {
  const keys = Object.keys(prop.data[0])
  return (
    <div className='container flex flex-col'>
      <SectionHeading Icon={BsTable} heading={prop.type} />
      <table className='block w-full overflow-x-scroll font-light text-left text-white rounded-md table-auto ext-sm overflow-x'>
        <thead className='font-medium bg-white border-b dark:border-neutral-500 dark:bg-neutral-600'>
          <tr>
            {keys.map((name, index) => {
              return (
                <th scope='col' key={index} className='px-6 py-4'>
                  {name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {prop.data.map((record, index) => {
            return (
              <tr key={index} className='border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700'>
                {Object.values(record).map((value, index) => {
                  return (
                    <td key={index} className='px-6 py-4 font-medium whitespace-nowrap'>
                      {value as string}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
