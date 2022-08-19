import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    ...theme.fn.focusStyles(),

    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    transition: '.2s ease-in-out ',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      transition: '.2s ease-in-out ',
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
