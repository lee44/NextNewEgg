import { IconType } from 'react-icons'
import { DashboardType } from '../types/dashboard'
import { FaUsers, FaCartArrowDown } from 'react-icons/fa'
import { MdOutlineComputer } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsTools } from 'react-icons/bs'

type OverViewItems = {
  title: string
  icon: IconType
  count: number
  color: string
}

export const getOverViewItems = (props: DashboardType): OverViewItems[] => {
  return [
    {
      title: 'Users',
      icon: FaUsers,
      count: props.users.length,
      color: 'yellow',
    },
    {
      title: 'Products',
      icon: BsTools,
      count: props.products,
      color: 'green',
    },
    {
      title: 'Sessions',
      icon: MdOutlineComputer,
      count: props.sessions,
      color: 'white	',
    },
    {
      title: 'Cart',
      icon: AiOutlineShoppingCart,
      count: props.carts,
      color: 'orange',
    },
    {
      title: 'Cart Items',
      icon: FaCartArrowDown,
      count: props.cartItems,
      color: 'red',
    },
  ]
}
