import { render, screen } from '@testing-library/react'
import CustomHeader from './CustomHeader'
import { navLinks } from './navLinks'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<CustomHeader links={navLinks} />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
