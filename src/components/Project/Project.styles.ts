import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

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
