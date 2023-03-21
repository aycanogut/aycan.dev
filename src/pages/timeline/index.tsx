import { List, Timeline as MantineTimeline, Text, Title } from '@mantine/core'
import { Circle, CircleDashed } from 'tabler-icons-react'

import Layout from '../../components/Layout/Layout'

const Timeline = () => (
  <Layout>
    <Title order={1} mb={30}>
      Timeline
    </Title>
    <MantineTimeline active={1} color="violet">
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Still learning"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Working to enhance and refine my JavaScript skills and
              abilities.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Acquiring knowledge and understanding of web accessibility
              principles, to ensure inclusive design and user experience.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Investigating design systems and testing methodologies to
              enhance the development process and produce high-quality, robust
              software.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Participating in open-source projects to further develop
              expertise and contribute to the software development community.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          Now
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Landed first job as a developer"
        lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Joined a start-up specializing in e-commerce fulfillment,
              robotics and logistics services.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Engaged in the development, maintenance, and optimization of the
              company&apos;s website, oplog.io, a several internal projects and
              one of the company&apos;s production applications.
            </Text>
          </List.Item>

          <List.Item>
            <Text color="dimmed" size="sm">
              - Acquired knowledge and experience in technologies such as
              JavaScript, React.js, TypeScript, Mantine, Tailwind, Redux,
              Directus, Zustand, and Hubspot.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          2021
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        title="Started to learn programming"
        bullet={<CircleDashed size={48} strokeWidth={4} color="gray" />}
        lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Started with Python and transitioned into web development.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Completed numerous courses and several small-scale projects.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Utilized freecodecamp and The Odin Project as primary
              educational resources.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Successfully graduated from a bootcamp program.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          2020
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        title="Born"
        bullet={<CircleDashed size={48} strokeWidth={4} color="gray" />}
      >
        <Text size="xs" mt={4}>
          1989
        </Text>
      </MantineTimeline.Item>
    </MantineTimeline>
  </Layout>
)

export default Timeline
