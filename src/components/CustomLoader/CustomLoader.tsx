import { FC } from 'react'
import { Loader, useMantineTheme } from '@mantine/core'

const CustomLoader: FC = () => {
  const theme = useMantineTheme()

  return (
    <Loader
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

export default CustomLoader
