import CustomHeader from './CustomHeader'
import { navLinks } from '../../helpers/navLinks'

export default {
  title: 'Header',
}

export const Usage = () => <CustomHeader links={navLinks} />
