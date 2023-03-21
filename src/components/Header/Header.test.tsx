import { render, screen } from '@testing-library/react'

import { navigation } from '../../routes/navigation'
import Header from './Header'

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Header links={navigation} />)
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    )
  })
})
