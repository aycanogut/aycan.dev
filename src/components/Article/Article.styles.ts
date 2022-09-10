import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    position: 'relative',
    minHeight: 160,
    margin: 8,

    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

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
    left: 12,
    bottom: 12,
  },
}))
