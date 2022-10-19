import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    ...theme.fn.focusStyles(),
  },

  cardLayout: {
    [theme.fn.largerThan('xs')]: {
      minHeight: 244,
    },

    [theme.fn.largerThan('sm')]: {
      minHeight: 194,
    },
  },

  title: {
    width: '65%',

    [theme.fn.largerThan('xs')]: {
      fontSize: theme.fontSizes.lg,
    },
  },
}))
