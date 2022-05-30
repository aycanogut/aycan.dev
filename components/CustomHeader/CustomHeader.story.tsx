import CustomHeader from './CustomHeader'
import { navLinks } from '../../routing/navLinks'

export default {
  title: 'Header',
}

export const Usage = () => <CustomHeader links={navLinks} />
