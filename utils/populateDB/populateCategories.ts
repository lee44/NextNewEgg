import prisma from '../../prisma/lib/prisma'

export const populateCategories = async () => {
  try {
    const newCategories = await prisma.category.createMany({
      data: [
        { name: 'Processor' },
        { name: 'Power Supply' },
        { name: 'Case Fan' },
        { name: 'RAM' },
        { name: 'Mouse' },
        { name: 'Keyboard' },
        { name: 'CPU Fan' },
        { name: 'Case' },
        { name: 'Storage' },
        { name: 'GPU' },
        { name: 'Motherboard' },
      ],
    })
  } catch (error) {
    console.error(error)
  }
}

populateCategories()
