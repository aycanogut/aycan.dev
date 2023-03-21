import { render, screen } from '@testing-library/react'

import Repo from './Repo'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Repo title="" url="" starCount={0} />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
