import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    ...theme.fn.focusStyles(),

    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    cursor: 'pointer',
    transition: '.2s ease-in-out',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      transition: '.2s ease-in-out',
    },
  },

  anchor: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.dark[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 700,

    '&:hover': {
      textDecoration: 'none',
    },
  },

  group: {
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
    },
  },

  text: {
    [theme.fn.largerThan('sm')]: {
      margin: '0 0 0 20px',
    },
  },
}))
