import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    transition: 'box-shadow .2s ease-in',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.yellow[4]
        : theme.colors.dark[9],
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    '&:hover': {
      boxShadow: theme.shadows.sm,
      transition: 'box-shadow .2s ease-in',
    },

    ...theme.fn.focusStyles(),
  },
}))
