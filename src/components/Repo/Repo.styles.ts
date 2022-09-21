import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: { minHeight: 160 },

  link: {
    all: 'unset',
    cursor: 'pointer',
    '&:hover': { textDecoration: 'none' },
  },
}))
