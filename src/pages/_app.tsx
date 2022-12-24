import { useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'
import { AppProps } from 'next/app'
import { getCookie, setCookies } from 'cookies-next'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react'
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import Spotlight from '../components/Spotlight/Spotlight'
import SEO from '../next-seo.config'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const router: NextRouter = useRouter()

  const canonicalUrl = `https://aycan.dev${
    router.asPath === '/' ? '' : router.asPath
  }`.split('?')[0]

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

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
      <DefaultSeo {...SEO} canonical={canonicalUrl} />
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
