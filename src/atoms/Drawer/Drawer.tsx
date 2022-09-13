import { Disclosure, DisclosureProps } from '../Disclosure'

export { useDisclosure as useDrawer } from '../Disclosure'

export type DrawerProps = DisclosureProps

export const Drawer: React.FC<DrawerProps> = ({ children, ...props }) => (
  <Disclosure {...props}>{children}</Disclosure>
)

export default Drawer
