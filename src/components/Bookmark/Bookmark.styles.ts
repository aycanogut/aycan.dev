import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.yellow[4]
        : theme.colors.violet[8],
  },
}))
