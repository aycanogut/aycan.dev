import { FC } from 'react'
import { Loader, useMantineTheme } from '@mantine/core'

const CustomLoader: FC = () => {
  const theme = useMantineTheme()

  return (
    <Loader
      variant="dots"
      size="xl"
      color={
        theme.colorScheme === 'dark'
          ? theme.colors.yellow[4]
          : theme.colors.violet[8]
      }
      sx={{ margin: '1rem auto', width: '100%' }}
    />
  )
}

export default CustomLoader
