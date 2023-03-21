import { Loader as MantineLoader, useMantineTheme } from '@mantine/core'
import { FC } from 'react'

const Loader: FC = () => {
  const theme = useMantineTheme()

  return (
    <MantineLoader
      variant="dots"
      size="xl"
      className="loader"
      color={
        theme.colorScheme === 'dark'
          ? theme.colors.yellow[4]
          : theme.colors.dark[9]
      }
    />
  )
}

export default Loader
