import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [theme.fn.largerThan('sm')]: {
      minHeight: 230,
    },

    ...theme.fn.focusStyles(),
  },

  imageWrapper: {
    [theme.fn.smallerThan('xs')]: {
      textAlign: 'center',
    },
  },

  button: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))
