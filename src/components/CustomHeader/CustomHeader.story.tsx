import CustomHeader from './CustomHeader'
import { navLinks } from './navLinks'

export default {
  title: 'Header',
}

export const Usage = () => <CustomHeader links={navLinks} />
