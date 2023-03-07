import React from 'react'
import { ProductListingProps } from '../../pages/product/[id]'

// type SpecsProps = {
//   specs: PowerSupply | CaseFan | RAM | Mouse | Keyboard | CPUFan | Case | Storage | GPU | Motherboard | CPU | {}
// }

const Specs = ({ product }: ProductListingProps) => {
  let specs =
    product.PowerSupplySpecs ||
    product.CaseFanSpecs ||
    product.RAMSpecs ||
    product.MouseSpecs ||
    product.KeyboardSpecs ||
    product.CPUFanSpecs ||
    product.CaseSpecs ||
    product.StorageSpecs ||
    product.CPUSpecs ||
    product.GPUSpecs ||
    product.MotherboardSpecs ||
    {}

  return (
    <ul className='list-disc ml-4'>
      {Object.entries(specs).map((spec, index) => {
        if (!['id', 'productId'].includes(spec[0])) {
          return <li key={index}>{spec[0] + ': ' + spec[1]}</li>
        }
      })}
    </ul>
  )
}

export default Specs
