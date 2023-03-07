export interface Product {
  id: string
  title: string
  link: string
  img: string
  price: number
  brand: string
  model: string
}

export interface PowerSupply extends Product {
  power: string
  color: string
  efficiency: string
}

export interface CaseFan extends Product {
  rpm: string
  airFlow: string
  noiseLevel: string
}
export interface RAM extends Product {
  size: string
  quantity: string
  type: string
}
export interface Mouse extends Product {
  trackingMethod: string
  color: string
  wireless: string
}
export interface Keyboard extends Product {
  style: string
  backlit: string
  color: string
  wireless: string
}
export interface CPUFan extends Product {
  rpm: string
  color: string
  noiseLevel: string
}
export interface Case extends Product {
  sidePanel: string
  color: string
  cabinetType: string
}
export interface Storage extends Product {
  storageInterface: string
  rpm: string
  type: string
  cacheMemory: string
}
export interface CPU extends Product {
  speed: string
  socketType: string
}
export interface GPU extends Product {
  storageInterface: string
  memory: string
  clockSpeed: string
}
export interface Motherboard extends Product {
  formFactor: string
  memorySlots: string
  socketType: string
}
