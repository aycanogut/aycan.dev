import { render, screen } from '@testing-library/react'
import Card from './Article'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Card thumbnail={''} title={''} />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
