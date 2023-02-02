import { Timeline as MantineTimeline, Title, Text } from '@mantine/core'
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
        <Text size="xs" mt={4}>
          Now
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Landed first job as a developer"
        lineVariant="dashed"
      >
        <Text size="xs" mt={4}>
          2021
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        title="Started to learn programming"
        bullet={<CircleDashed size={48} strokeWidth={4} color="gray" />}
        lineVariant="dashed"
      >
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
