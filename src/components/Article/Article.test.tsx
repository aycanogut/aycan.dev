import { render, screen } from '@testing-library/react'

import Article from './Article'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(
      <Article title="" link="" categories={['', '', '', '', '']} pubDate="" />
    )
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
