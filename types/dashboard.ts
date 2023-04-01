import { Product, User, Session as Sessions } from '@prisma/client'

export type DashboardType = {
  users: User[]
  products: number
  sessions: number
  carts: number
  cartItems: number
}
