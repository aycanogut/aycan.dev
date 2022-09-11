import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'
import { AppProps } from 'next/app'
import { getCookie, setCookies } from 'cookies-next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from '@mantine/core'
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight'
import { NotificationsProvider } from '@mantine/notifications'
import { SpotlightContent } from '../helpers/SpotlightContent'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)
  const router = useRouter()

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  const actions: SpotlightAction[] = SpotlightContent?.map(
    (item: { title: string; url: string }) => ({
      title: item.title,
      onTrigger: item.url
        ? () => router.push(`/${item.url}`)
        : () => toggleColorScheme(),
    })
  )

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
      <style jsx global>
        {`
          #__next {
            min-height: 100vh;
          }

          //! remove it
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <SpotlightProvider actions={actions}>
            <NotificationsProvider>
              <Component {...pageProps} />
            </NotificationsProvider>
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
})
