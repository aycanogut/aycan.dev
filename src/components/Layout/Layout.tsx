import { FC } from 'react'
import { Container } from '@mantine/core'
import { motion } from 'framer-motion'
import CustomHeader from '../CustomHeader/CustomHeader'
import { ILayoutProps } from '../../interfaces/Layout.interface'
import { navLinks } from '../CustomHeader/navLinks'

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <CustomHeader links={navLinks} />
    <main>
      <Container size="md" px="xl" mb={60}>
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          exit={{ y: 16 }}
          transition={{ duration: 0.18 }}
        >
          {children}
        </motion.div>
      </Container>
    </main>
  </>
)

export default Layout
