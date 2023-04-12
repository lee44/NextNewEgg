import { IconType } from 'react-icons'
import { ProjectIcons } from './projectIcons'

type SideBarDashboardItem = {
  href: string
  icon: IconType
  label: string
}

export const sidebarDashboardItems: SideBarDashboardItem[] = [
  {
    href: '/dashboard',
    icon: ProjectIcons.dashboard,
    label: 'Dashboard',
  },
  {
    href: '/admin/data?type=users',
    icon: ProjectIcons.users,
    label: 'Users',
  },
  {
    href: '/admin/data?type=products',
    icon: ProjectIcons.products,
    label: 'Products',
  },
]
