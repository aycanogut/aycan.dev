import { FC } from 'react'
import { Container } from '@mantine/core'
import CustomHeader from '../CustomHeader/CustomHeader'
import Transition from '../Transition/Transition'
import { ILayoutProps } from '../../interfaces/Layout.interface'
import { navigation } from '../../routes/navigation'

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <CustomHeader links={navigation} />
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
