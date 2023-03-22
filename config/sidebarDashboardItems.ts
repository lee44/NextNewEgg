import { IconType } from 'react-icons'
import { MdSpaceDashboard } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { HiComputerDesktop } from 'react-icons/hi2'

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
    icon: AiOutlineUser,
    label: 'Users',
  },
  {
    href: '/admin/products',
    icon: HiComputerDesktop,
    label: 'Products',
  },
]
