import { navigation } from '../../routes/navigation'
import Header from './Header'

export default {
  title: 'Header',
}

export const Usage = () => <Header links={navigation} />
