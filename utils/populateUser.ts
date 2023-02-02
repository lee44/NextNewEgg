import prisma from '../prisma/lib/prisma'

export const populateUser = async () => {
  try {
    await prisma.user.create({
      data: {
        name: 'test',
        email: 'test@example.com',
      },
    })
  } catch (error) {}
}

populateUser()
