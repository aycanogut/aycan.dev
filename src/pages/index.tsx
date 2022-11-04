import Link from 'next/link'
import {
  Title,
  Text,
  Anchor,
  Group,
  Paper,
  Stack,
  Box,
  useMantineColorScheme,
} from '@mantine/core'
import useSWR from 'swr'
import {
  Html5,
  CssThree,
  Javascript,
  Typescript,
  ReactJs,
  Nextdotjs,
  Sass,
  Styledcomponents,
  Tailwindcss,
} from '@icons-pack/react-simple-icons'
import useWidth from '../hooks/useWidth'
import fetcher from '../lib/fetcher'
import Layout from '../components/Layout/Layout'
import CustomLoader from '../components/CustomLoader/CustomLoader'
import Error from '../components/Error/Error'
import { IArticleProps } from '../interfaces/Blog.interface'

const HomePage = () => {
  const { data, error } = useSWR<IArticleProps>('api/medium', fetcher)
  const { colorScheme } = useMantineColorScheme()
  const { width } = useWidth()

  if (error) return <Error />

  return (
    <Layout>
      {!data ? (
        <CustomLoader />
      ) : (
        <>
          <Title order={1} mb={30}>
            Hello 🤙
          </Title>
          <Box>
            <Group position="apart">
              <Group direction="column" spacing={2}>
                <Text>
                  I&apos;m a frontend developer based in İzmir, Turkey.
                </Text>
                <Text>
                  I love to&nbsp;
                  <Anchor
                    href="https://github.com/aycanogut"
                    target="_blank"
                    variant="link"
                    weight={500}
                    underline
                  >
                    <strong>create things</strong>
                  </Anchor>
                  &nbsp;with JavaScript and publish&nbsp;
                  <Anchor
                    href="https://aycanogut.medium.com/"
                    target="_blank"
                    variant="link"
                    weight={500}
                    underline
                  >
                    <strong>articles</strong>
                  </Anchor>
                  &nbsp;regularly.
                </Text>
                <Text mt={10}>
                  Find out&nbsp;
                  <Link href="/about">
                    <Anchor component="a" weight={500} underline>
                      <strong>more</strong>.
                    </Anchor>
                  </Link>
                </Text>
              </Group>
            </Group>
            <Group direction="column" mt={60}>
              <Title order={2}>Tech Stack</Title>
              <Paper py="lg" sx={{ background: 'rgba(0,0,0, 0.03)' }}>
                <Group position={width < 650 ? 'apart' : 'center'} spacing="lg">
                  <Html5 color="#E34F26" size={70} />
                  <CssThree color="#1572B6" size={70} />
                  <Javascript color="#F7DF1E" size={70} />
                  <Typescript color="#3178C6" size={70} />
                  <ReactJs color="#61DAFB" size={70} />
                  <Nextdotjs color="#000000" size={70} />
                  <Sass color="#CC6699" size={70} />
                  <Styledcomponents color="#DB7093" size={70} />
                  <Tailwindcss color="#06B6D4" size={70} />
                </Group>
              </Paper>
            </Group>
            <Group direction="column" mt={60}>
              <Title order={2}>Latest Articles</Title>
              <Stack spacing="xs">
                {data &&
                  data
                    .slice(0, 5)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .map((article: { link: string; title: string }) => (
                      <Text
                        key={article.title}
                        component="a"
                        href={article.link}
                        target="_blank"
                        color={colorScheme === 'dark' ? 'yellow' : 'dark'}
                        weight={700}
                        underline
                      >
                        {article.title}
                      </Text>
                    ))}
              </Stack>
            </Group>
          </Box>
        </>
      )}
    </Layout>
  )
}

export default HomePage
