import React from 'react'
import { User } from '@prisma/client'
import Card from '../../templates/Card'
import { RxAvatar } from 'react-icons/rx'

const UserCard = ({ user }: { user: User }) => {
  const created_at = new Date(user.created_at)

  return (
    <Card>
      <div className='flex items-center justify-between gap-4'>
        <RxAvatar size={50} className='dark:text-white' />
        <div>
          <h5 className='text-left'>{user.name}</h5>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
        <div>
          <h6>
            {created_at.toLocaleDateString()}
            <br />
            {created_at.toLocaleTimeString()}
          </h6>
        </div>
      </div>
    </Card>
  )
}

export default UserCard
