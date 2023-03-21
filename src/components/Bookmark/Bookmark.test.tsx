import { render, screen } from '@testing-library/react'

import Bookmark from './Bookmark'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Bookmark link="" title="" />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
