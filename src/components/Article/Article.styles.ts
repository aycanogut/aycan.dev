import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    position: 'relative',
    minHeight: 160,
    transition: 'box-shadow .2s ease-in',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    '&:hover': {
      boxShadow: theme.shadows.md,
      transition: 'box-shadow .2s ease-in',
    },

    ...theme.fn.focusStyles(),

    [theme.fn.largerThan('sm')]: {
      minHeight: 200,
    },

    [theme.fn.largerThan('md')]: {
      minHeight: 228,
    },
  },

  badges: {
    position: 'absolute',
    left: 16,
    bottom: 16,
  },
}))
