import Header from './Header'
import { navigation } from '../../routes/navigation'

export default {
  title: 'Header',
}

export const Usage = () => <Header links={navigation} />
