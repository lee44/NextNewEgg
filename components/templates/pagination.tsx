import { useRouter } from 'next/router'
import React from 'react'
import { QueryProp } from '../../pages/admin/data'
import Button from './Button'

const Pagination = ({ pages, type }: { pages: number; type: string }) => {
  const router = useRouter()
  const { page } = router.query as QueryProp

  let parseIntPage = parseInt(page ?? '1') !== 0 ? parseInt(page ?? '1') : 1

  const getButtons = () => {
    let buttons = []
    for (let i = 1; i <= pages; i++) {
      buttons.push(
        <Button
          text={`${i}`}
          key={i}
          url={parseIntPage === i ? '' : `/admin/data?type=${type}&page=${i}`}
          additionalClasses={parseIntPage === i ? 'bg-gray-500 hover:bg-gray-500 pointer-events-none min-w-[40px]' : 'min-w-[40px]'}
        />
      )
    }

    return buttons
  }

  return <div className='flex gap-2'>{getButtons()}</div>
}

export default Pagination
