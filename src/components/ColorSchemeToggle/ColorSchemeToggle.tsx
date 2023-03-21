import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'
import { MoonStars, Sun } from 'tabler-icons-react'

const ColorSchemeToggle: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        aria-label="Toggle Theme Icon"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <Sun size={24} strokeWidth={2} color="#FFD43B" />
        ) : (
          <MoonStars size={24} strokeWidth={2} color="#1A1B1E" />
        )}
      </ActionIcon>
    </Group>
  )
}

export default ColorSchemeToggle
