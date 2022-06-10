import { Title, Text } from '@mantine/core'
import GitHubCalendar from 'react-github-calendar'
import Layout from '../components/Layout/Layout'

const About = () => (
  <Layout>
    <Title order={1} mb={30}>
      About
    </Title>
    <Text weight={500}>Hi, </Text>
    <Text weight={500} mt={8}>
      My name is <strong>Aycan Öğüt</strong>, and I’m a Front-end Developer at{' '}
      <Text
        component="a"
        href="https://www.oplog.io"
        target="about_blank"
        transform="uppercase"
        weight={600}
      >
        oplog
      </Text>
      .
    </Text>
    <Text weight={500} mt={8}>
      I&apos;ve been working to improve myself in the software development field
      for the past year. I have a passion for learning new concepts and
      technologies. My motivation is to grow as a person by learning new skills
      and using what I&apos;ve learned to solve problems, help others and
      contribute to the community.
    </Text>
    <Title order={2} mt={50} mb={30}>
      My Github Stats
    </Title>
    <GitHubCalendar
      username="aycanogut"
      year="last"
      style={{ maxWidth: '960px' }}
    />
  </Layout>
)

export default About
