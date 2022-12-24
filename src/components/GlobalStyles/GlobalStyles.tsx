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

      '.loader': {
        margin: '50% auto',
        width: '100%',

        [theme.fn.largerThan('sm')]: {
          margin: '35% auto',
        },
      },

      '::selection': {
        color: theme.colors.dark[9],
        background: theme.colors.yellow[4],
      },

      '::-moz-selection': {
        color: theme.colors.dark[9],
        background: theme.colors.yellow[4],
      },
    })}
  />
)

export default GlobalStyles
