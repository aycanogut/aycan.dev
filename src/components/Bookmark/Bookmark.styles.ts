import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.yellow[4]
        : theme.colors.violet[8],

    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },

    ...theme.fn.focusStyles(),
  },
}))
