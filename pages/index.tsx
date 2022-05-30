import CustomHeader from '../components/CustomHeader/CustomHeader'
import { navLinks } from '../routing/navLinks'

export default function HomePage() {
  return (
    <>
      <CustomHeader links={navLinks} />
    </>
  )
}
