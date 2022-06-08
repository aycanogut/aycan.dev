import { render, screen } from '@testing-library/react'
import CustomImage from './CustomImage'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<CustomImage src={''} alt={''} />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
