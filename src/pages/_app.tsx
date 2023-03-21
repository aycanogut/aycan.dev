import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { Analytics } from '@vercel/analytics/react'
import { setCookies } from 'cookies-next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import TagManager, { TagManagerArgs } from 'react-gtm-module'

import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import Seo from '../components/Seo/Seo'
import Spotlight from '../components/Spotlight/Spotlight'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || ''

  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <>
      <Head>
        <title>Aycan&apos;s website</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Seo />
      <GlobalStyles />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <Spotlight>
              <Component {...pageProps} />
              <Analytics />
            </Spotlight>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}
