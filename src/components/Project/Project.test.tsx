import { render, screen } from '@testing-library/react'
import Project from './Project'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(
      <Project image="" title="" description="" stack="" github="" vercel="" />
    )
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
