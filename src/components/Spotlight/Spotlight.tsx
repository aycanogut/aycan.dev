import { useMantineColorScheme } from '@mantine/core'
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight'
import { useRouter } from 'next/router'
import { FC } from 'react'
import {
  AppWindow,
  Bookmarks,
  Home2,
  Moon,
  Notes,
  Pacman,
  Search,
  Sun,
  Timeline,
  Tool,
} from 'tabler-icons-react'

import { ISpotlightProps } from '../../interfaces/Spotlight.interface'

const Spotlight: FC<ISpotlightProps> = ({ children }) => {
  const router = useRouter()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const SpotlightContent = [
    {
      title: 'Home',
      icon: <Home2 />,
      url: '/',
    },
    {
      title: 'Projects',
      icon: <AppWindow />,
      url: '/projects',
    },
    {
      title: 'Articles',
      icon: <Notes />,
      url: '/articles',
    },
    {
      title: 'Bookmarks',
      icon: <Bookmarks />,
      url: '/bookmarks',
    },
    {
      title: 'Tools',
      icon: <Tool />,
      url: '/tools',
    },
    {
      title: 'Timeline',
      icon: <Timeline />,
      url: '/timeline',
    },

    {
      title: 'About',
      icon: <Pacman />,
      url: '/about',
    },
    {
      title: 'Toggle Theme',
      icon: colorScheme === 'dark' ? <Sun /> : <Moon />,
    },
  ]

  const actions: SpotlightAction[] = SpotlightContent?.map(
    (item: { title: string; icon: any; url: string }) => ({
      title: item.title,
      icon: item.icon,
      onTrigger: item.url
        ? () => router.push(`${item.url}`)
        : () => toggleColorScheme(),
    })
  )

  return (
    <SpotlightProvider searchIcon={<Search />} actions={actions}>
      {children}
    </SpotlightProvider>
  )
}

export default Spotlight
