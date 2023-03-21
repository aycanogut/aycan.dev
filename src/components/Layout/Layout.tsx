import { Container } from '@mantine/core'
import { FC } from 'react'

import { ILayoutProps } from '../../interfaces/Layout.interface'
import { navigation } from '../../routes/navigation'
import Header from '../Header/Header'
import Transition from '../Transition/Transition'

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Header links={navigation} />
    <main>
      <Container size="md" px="xl" pt={60} pb={70}>
        <Transition
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </Transition>
      </Container>
    </main>
  </>
)

export default Layout
