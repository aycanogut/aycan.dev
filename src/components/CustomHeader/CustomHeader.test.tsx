import { render, screen } from '@testing-library/react'
import CustomHeader from './CustomHeader'
import { navigation } from '../../routes/navigation'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<CustomHeader links={navigation} />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
