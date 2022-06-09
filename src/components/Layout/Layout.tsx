import { FC, ReactNode } from 'react'
import { Container } from '@mantine/core'
import CustomHeader from '../CustomHeader/CustomHeader'
import Footer from '../Footer/Footer'
import { navLinks } from '../CustomHeader/navLinks'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <CustomHeader links={navLinks} />
    <Container size="md" px="xl">
      {children}
    </Container>
    <Footer />
  </>
)

export default Layout
