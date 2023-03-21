// https://github.com/leerob/leerob.io/blob/main/components/NowPlaying.tsx
import { Box, Paper, Text } from '@mantine/core'
import { animate } from 'motion'
import Image from 'next/image'
import { FC, useEffect } from 'react'
import useSWR from 'swr'

import { NowPlayingSong } from '../../interfaces/NowPlaying.type'
import fetcher from '../../lib/fetcher'
import useStyles from './NowPlaying.styles'

const AnimatedBars = () => {
  const { classes } = useStyles()

  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    )
  }, [])

  return (
    <Box className={classes.animatedBards}>
      <Paper id="bar1" className={classes.barOne} />
      <Paper id="bar2" className={classes.barTwo} />
      <Paper id="bar3" className={classes.barThree} />
    </Box>
  )
}

const NowPlaying: FC = () => {
  const { data } = useSWR<NowPlayingSong>('api/spotify-now-playing', fetcher)
  const { classes } = useStyles()

  return (
    <Box className={classes.spotifyWidget}>
      {data?.songUrl ? (
        <Box className={classes.nowPlaying}>
          <Image
            className={classes.songImage}
            src={data.albumImageUrl}
            alt={data.title}
            width={80}
            height={80}
          />
          <Box className={classes.title}>
            <Text transform="uppercase" size="sm" color="#B1B1B1" weight={500}>
              {data.artist}
            </Text>
            <Text
              transform="capitalize"
              color="#1DB954"
              size="sm"
              weight={500}
              mt={10}
            >
              {data.title}
            </Text>
          </Box>
          <AnimatedBars />
        </Box>
      ) : (
        <Box className={classes.notPlaying}>
          <svg className={classes.svg} viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
          <Text
            transform="capitalize"
            size="md"
            weight={500}
            ml={18}
            className={classes.notListening}
          >
            Not Listening
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default NowPlaying
