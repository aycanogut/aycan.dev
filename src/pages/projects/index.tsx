import { Grid, Group, Title, useMantineTheme } from '@mantine/core'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import { projects } from '../../data/projects'
import { IProjectProps } from '../../interfaces/Project.interface'

const Project = dynamic(() => import('../../components/Project/Project'))

const Projects = () => {
  const theme = useMantineTheme()

  if (!projects) return <Loader />

  return (
    <Layout>
      <Group position="apart" mb={30}>
        <Title order={1}>Projects</Title>
        <Title order={2}>
          <Link
            href="projects/repos"
            prefetch={false}
            tabIndex={0}
            role="link"
            style={{
              textDecoration: 'none',
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.yellow[4]
                  : theme.colors.dark[8],
            }}
          >
            Github Repos
          </Link>
        </Title>
      </Group>
      <Grid gutter="xl" grow>
        {projects.map((project: IProjectProps) => (
          <Grid.Col span={12} xs={6} key={project.id}>
            <Project
              id={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              stack={project.stack}
              links={project.links}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Layout>
  )
}

export default Projects
