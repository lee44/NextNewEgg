import React from 'react'
import { User } from '@prisma/client'
import Card from '../../templates/card'
import { RxAvatar } from 'react-icons/rx'

const UserCard = ({ user }: { user: User }) => {
  console.log(typeof user.created_at)

  return (
    <Card>
      <div className='flex items-center gap-4'>
        <RxAvatar color='white' size={50} />
        <div>
          <h6>{user.name}</h6>
          <p>
            {user.email} {user.role}
          </p>
        </div>
        <div>
          <h6>{user.created_at.toString().substring(0, 10)}</h6>
        </div>
      </div>
    </Card>
  )
}

export default UserCard
