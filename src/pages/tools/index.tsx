import {
  Group,
  List,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'

import Layout from '../../components/Layout/Layout'
import tools from '../../data/tools'
import { IToolProps } from '../../interfaces/Tools.interface'

const Tools = () => {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Layout>
      <Title order={1} mb={30}>
        Tools
      </Title>
      <Group direction="column">
        <Stack spacing="xs">
          <List size="md" icon="-">
            {tools?.map((tool: IToolProps) => (
              <List.Item key={tool.id}>
                <Text
                  component="a"
                  href={tool.link}
                  target="_blank"
                  color={colorScheme === 'dark' ? 'yellow' : 'dark'}
                  weight={700}
                  underline
                >
                  {tool.title}
                </Text>
              </List.Item>
            ))}
          </List>
        </Stack>
      </Group>
    </Layout>
  )
}

export default Tools
