import CustomHeader from '../components/Header/Header'
import { navLinks } from '../routing/navLinks'

export default function HomePage() {
    return (
        <>
            <CustomHeader links={navLinks} />
        </>
    )
}
