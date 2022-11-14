import CustomHeader from './CustomHeader'
import { navigation } from '../../routes/navigation'

export default {
  title: 'Header',
}

export const Usage = () => <CustomHeader links={navigation} />
