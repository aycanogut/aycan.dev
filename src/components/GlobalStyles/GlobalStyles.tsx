import { FC } from 'react'
import { Global } from '@mantine/core'

const GlobalStyles: FC = () => (
  <Global
    styles={(theme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      '#__next': {
        minHeight: '100vh',
      },

      //! remove it
      '::-webkit-scrollbar': {
        display: 'none',
      },

      '.loader': {
        margin: '40% auto',
        width: '100%',
      },
    })}
  />
)

export default GlobalStyles
