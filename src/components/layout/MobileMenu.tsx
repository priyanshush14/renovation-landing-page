import { NavigationSidebar } from './NavigationSidebar'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems?: { label: string; href: string }[]
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return <NavigationSidebar isOpen={isOpen} onClose={onClose} />
}
