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
  air_flow: string
  noise_level: string
}
export interface RAM extends Component {
  size: string
  quantity: string
  type: string
}
export interface Mouse extends Component {
  track_method: string
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
  noise_level: string
}
export interface Case extends Component {
  side_panel: string
  color: string
  cabinet_type: string
}
export interface Storage extends Component {
  storage_interface: string
  rpm: string
  type: string
  cache_memory: string
}
export interface CPU extends Component {
  speed: string
  socketType: string
}
export interface GPU extends Component {
  storage_interface: string
  memory: string
  clock_speed: string
}
export interface Motherboard extends Component {
  form_factor: string
  memory_slots: string
  socket_type: string
}
