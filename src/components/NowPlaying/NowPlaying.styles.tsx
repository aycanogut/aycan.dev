import { createStyles } from '@mantine/core'

export default createStyles(() => ({
  animatedBards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 12px 0 auto',
  },

  barOne: {
    backgroundColor: '#D1D5DB',
    width: '0.25rem',
    height: '0.5rem',
    opacity: 0.75,
    marginRight: '3px',
  },

  barTwo: {
    backgroundColor: '#D1D5DB',
    width: '0.25rem',
    height: '0.25rem',
    marginRight: '3px',
  },

  barThree: {
    backgroundColor: '#D1D5DB',
    width: '0.25rem',
    height: '0.75rem',
    opacity: 0.8,
  },

  spotifyWidget: {
    display: 'flex',
    alignItems: 'center',
    width: 450,
    minHeight: 80,
    margin: '100px auto 0',
    padding: 0,
    background: '#2e2e2e',
    borderRadius: 24,
  },

  nowPlaying: {
    display: 'flex',
    width: '100%',
    padding: '0 20px 0 0',
  },

  songImage: {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
  },

  title: {
    display: 'flex',
    flexDirection: 'column',
    margin: '11px 0 0 16px',
  },

  notPlaying: {
    display: 'flex',
    alignItems: 'center',
    margin: '11px 0 12px 20px',
  },

  svg: {
    width: 40,
    height: 40,
  },
}))
