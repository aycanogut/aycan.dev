import { render, screen } from '@testing-library/react'

import Project from './Project'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(
      <Project id={1} image="" title="" description="" stack={['']} links="" />
    )
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
