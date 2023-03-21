import { render, screen } from '@testing-library/react'

import Error from './Error'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Error />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
