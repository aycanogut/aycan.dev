import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [theme.fn.largerThan('xs')]: {
      minHeight: 265,
    },

    [theme.fn.largerThan('sm')]: {
      minHeight: 224,
    },

    ...theme.fn.focusStyles(),
  },

  text: {
    [theme.fn.smallerThan('sm')]: {
      marginBlock: 12,
    },
  },
}))
