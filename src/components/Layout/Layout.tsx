import { FC, ReactNode } from 'react'
import { Container } from '@mantine/core'
import CustomHeader from '../CustomHeader/CustomHeader'
import Footer from '../CustomFooter/CustomFooter'
import { navLinks } from '../CustomHeader/navLinks'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <CustomHeader links={navLinks} />
    <main>
      <Container size="md" px="xl">
        {children}
      </Container>
    </main>
    <Footer />
  </>
)

export default Layout
