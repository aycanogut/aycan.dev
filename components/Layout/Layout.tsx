import { FC, ReactNode } from 'react'
import { Box } from '@mantine/core'
import CustomHeader from '../CustomHeader/CustomHeader'
import Footer from '../Footer/Footer'
import { navLinks } from '../../routing/navLinks'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <Box>
    <CustomHeader links={navLinks} />
    <Box>{children}</Box>
    <Footer />
  </Box>
)

export default Layout
