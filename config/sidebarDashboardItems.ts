import { IconType } from 'react-icons'
import { MdSpaceDashboard } from 'react-icons/md'

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
    href: '/users',
    icon: MdSpaceDashboard,
    label: 'Users',
  },
  {
    href: '/products',
    icon: MdSpaceDashboard,
    label: 'Products',
  },
]
