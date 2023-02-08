import { Product } from "@prisma/client"

export type Products = {
  [category: string]: Product[]
}