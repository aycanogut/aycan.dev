import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  footer: {
    marginTop: '120px',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('md')]: {
      marginTop: '100px',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.dark[7],

    [theme.fn.largerThan('lg')]: {
      gap: '4rem',
    },
  },
}))
