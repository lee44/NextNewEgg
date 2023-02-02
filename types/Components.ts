export interface Component {
  id: string
  title: string
  link: string
  img: string
  price: number
  brand: string
  model: string
}

export interface PowerSupply extends Component {
  power: string
  color: string
  efficiency: string
}

export interface CaseFan extends Component {
  rpm: string
  airFlow: string
  noiseLevel: string
}
export interface RAM extends Component {
  size: string
  quantity: string
  type: string
}
export interface Mouse extends Component {
  trackingMethod: string
  color: string
  wireless: string
}
export interface Keyboard extends Component {
  style: string
  backlit: string
  color: string
  wireless: string
}
export interface CPUFan extends Component {
  rpm: string
  color: string
  noiseLevel: string
}
export interface Case extends Component {
  sidePanel: string
  color: string
  cabinetType: string
}
export interface Storage extends Component {
  storageInterface: string
  rpm: string
  type: string
  cacheMemory: string
}
export interface CPU extends Component {
  speed: string
  socketType: string
}
export interface GPU extends Component {
  storageInterface: string
  memory: string
  clockSpeed: string
}
export interface Motherboard extends Component {
  formFactor: string
  memorySlots: string
  socketType: string
}
