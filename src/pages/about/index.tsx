import {
  Group,
  Title,
  Text,
  Box,
  Anchor,
  useMantineColorScheme,
} from '@mantine/core'
import {
  Github,
  Linkedin,
  Medium,
  Twitter,
  Gmail,
} from '@icons-pack/react-simple-icons'
import GitHubCalendar from 'react-github-calendar'
import Layout from '../../components/Layout/Layout'
import NowPlaying from '../../components/NowPlaying/NowPlaying'

const About = () => {
  const { colorScheme } = useMantineColorScheme()
  const iconColor = colorScheme === 'dark' ? '#fff' : '#000'

  return (
    <Layout>
      <Box>
        <Title order={1} mb={30}>
          About
        </Title>
        <Text weight={500} mt={8}>
          <strong>Aycan Öğüt</strong>. 1989, Izmir.
        </Text>
        <Text weight={500} mt={20}>
          I&apos;m a self-taught developer with about a year of industry
          experience. I enjoy learning about new technologies and tools, writing
          articles, and working on open source projects.
        </Text>
        <Text weight={500} my={20}>
          Currently, I&apos;m working at{' '}
          <Anchor
            href="https://www.oplog.io"
            target="_blank"
            variant="link"
            weight={700}
            underline
            transform="uppercase"
          >
            oplog
          </Anchor>{' '}
          as a front-end developer.
        </Text>
        <Text weight={500} mt={20}>
          Along with pixel hunting, I also like to skate, attend live music
          events, play video games, watch TV shows, and hang out with my
          friends.
        </Text>
        <Text weight={500} mt={20}>
          More details&nbsp;
          <Anchor
            variant="link"
            href="https://read.cv/aycanogut"
            target="_blank"
            weight={500}
            underline
          >
            <strong>here</strong>.
          </Anchor>
        </Text>
      </Box>
      <Box>
        <Title order={2} mt={50} mb={30}>
          Contact Me
        </Title>
        <Group>
          <Anchor href="https://www.github.com/aycanogut">
            <Github color={iconColor} size={32} />
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/aycanogut">
            <Linkedin color={iconColor} size={32} />
          </Anchor>
          <Anchor href="https://medium.com/@aycanogut">
            <Medium color={iconColor} size={32} />
          </Anchor>
          <Anchor href="https://twitter.com/bleedeleventh">
            <Twitter color={iconColor} size={32} />
          </Anchor>
          <Anchor href="mailto:aycanonfire@gmail.com">
            <Gmail color={iconColor} size={32} />
          </Anchor>
        </Group>
      </Box>
      <Box>
        <Title order={3} mt={50} mb={30}>
          My Github Stats
        </Title>
        <GitHubCalendar
          username="aycanogut"
          year="last"
          style={{ maxWidth: '960px' }}
        />
      </Box>
      <NowPlaying />
    </Layout>
  )
}

export default About
