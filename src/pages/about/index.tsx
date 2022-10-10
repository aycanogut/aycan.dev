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
        <Text weight={500}>Hi, </Text>
        <Text weight={500} mt={8}>
          My name is <strong>Aycan Öğüt</strong>, and I’m a Frontend Developer.
        </Text>
        <Text weight={500} mt={8}>
          I&apos;ve been working to improve myself in the software development
          field for the past year. I have a passion for learning new concepts
          and technologies. My motivation is to grow as a person by learning new
          skills and using what I&apos;ve learned to solve problems, help others
          and contribute to the community.
        </Text>
        <Text mt={8}>
          Currently, I&apos;m working at{' '}
          <Text
            component="a"
            href="https://www.oplog.io"
            target="about_blank"
            transform="uppercase"
            weight={700}
          >
            oplog
          </Text>
          .
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
