import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    ...theme.fn.focusStyles(),

    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[1],
    },
  },

  imageWrapper: {
    [theme.fn.smallerThan('xs')]: {
      textAlign: 'center',
    },
  },

  social: {
    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'center',
    },
  },
}))
