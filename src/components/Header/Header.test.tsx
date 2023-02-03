import { render, screen } from '@testing-library/react'
import Header from './Header'
import { navigation } from '../../routes/navigation'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Header links={navigation} />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
