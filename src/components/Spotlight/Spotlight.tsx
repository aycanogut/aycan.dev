import { FC } from 'react'
import { useRouter } from 'next/router'
import { useMantineColorScheme } from '@mantine/core'
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight'
import { SpotlightContent } from '../../helpers/spotlight'
import { ISpotlightProps } from '../../interfaces/Spotlight.interface'

const Spotlight: FC<ISpotlightProps> = ({ children }) => {
  const router = useRouter()
  const { toggleColorScheme } = useMantineColorScheme()

  const actions: SpotlightAction[] = SpotlightContent?.map(
    (item: { title: string; url: string }) => ({
      title: item.title,
      onTrigger: item.url
        ? () => router.push(`/${item.url}`)
        : () => toggleColorScheme(),
    })
  )

  return <SpotlightProvider actions={actions}>{children}</SpotlightProvider>
}

export default Spotlight
