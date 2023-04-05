import { IconType } from 'react-icons'
import { DashboardType } from '../types/dashboard'
import { BsTools } from 'react-icons/bs'
import { ProjectIcons } from './projectIcons'

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
      icon: ProjectIcons.users,
      count: props.users.length,
      color: 'yellow',
    },
    {
      title: 'Products',
      icon: ProjectIcons.products,
      count: props.products,
      color: 'green',
    },
    {
      title: 'Sessions',
      icon: ProjectIcons.session,
      count: props.sessions,
      color: 'white	',
    },
    {
      title: 'Cart',
      icon: ProjectIcons.cart,
      count: props.carts,
      color: 'orange',
    },
    {
      title: 'Cart Items',
      icon: ProjectIcons.cartItems,
      count: props.cartItems,
      color: 'red',
    },
  ]
}
