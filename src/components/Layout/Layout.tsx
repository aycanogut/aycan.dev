import { FC } from 'react'
import { Container } from '@mantine/core'
import CustomHeader from '../CustomHeader/CustomHeader'
import Footer from '../CustomFooter/CustomFooter'
import { ILayoutProps } from '../../ts/interfaces/Layout.interface'
import { navLinks } from '../CustomHeader/navLinks'

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
