import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  link: {
    all: 'unset',
    cursor: 'pointer',
    '&:hover': { textDecoration: 'none' },
  },
}))
