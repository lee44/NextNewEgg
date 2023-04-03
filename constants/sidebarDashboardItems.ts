import { IconType } from 'react-icons'
import { MdSpaceDashboard } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { HiComputerDesktop } from 'react-icons/hi2'
import { FaUsers, FaCartArrowDown } from 'react-icons/fa'
import { BsTools } from 'react-icons/bs'

type SideBarDashboardItem = {
  href: string
  icon: IconType
  label: string
}

export const sidebarDashboardItems: SideBarDashboardItem[] = [
  {
    href: '/dashboard',
    icon: MdSpaceDashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/users',
    icon: FaUsers,
    label: 'Users',
  },
  {
    href: '/admin/products',
    icon: BsTools,
    label: 'Products',
  },
]
