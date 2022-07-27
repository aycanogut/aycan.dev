import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
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
