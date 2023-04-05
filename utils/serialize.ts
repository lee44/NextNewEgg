import { Product, User } from '@prisma/client'

export const serialize = (data: User | User[] | Product | Product[] | null) => {
  return JSON.parse(JSON.stringify(data))
}
