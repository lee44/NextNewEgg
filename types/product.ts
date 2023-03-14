import { Product } from '@prisma/client'
import {
  CaseFanSpecs,
  CaseSpecs,
  CPUFanSpecs,
  CPUSpecs,
  GPUSpecs,
  KeyboardSpecs,
  MotherboardSpecs,
  MouseSpecs,
  PowerSupplySpecs,
  RAMSpecs,
  StorageSpecs,
} from '@prisma/client'

export type ProductBase = {
  product: Product
}

export type Products = {
  [category: string]: Product[]
}

export type ProductListingProps = {
  product: Product & {
    PowerSupplySpecs?: PowerSupplySpecs
    CaseFanSpecs?: CaseFanSpecs
    RAMSpecs?: RAMSpecs
    MouseSpecs?: MouseSpecs
    KeyboardSpecs?: KeyboardSpecs
    CPUFanSpecs?: CPUFanSpecs
    CaseSpecs?: CaseSpecs
    StorageSpecs?: StorageSpecs
    CPUSpecs?: CPUSpecs
    GPUSpecs?: GPUSpecs
    MotherboardSpecs?: MotherboardSpecs
  }
  similarProducts?: Product[]
}
