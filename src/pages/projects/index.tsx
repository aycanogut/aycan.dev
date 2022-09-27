import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Grid, Title, Group, useMantineTheme } from '@mantine/core'
import { projects } from '../../utils/projects'
import Layout from '../../components/Layout/Layout'
import Project from '../../components/Project/Project'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import { IProjectProps } from '../../interfaces/Project.interface'

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const theme = useMantineTheme()

  //TODO replace with CustomLoader when API is ready
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <Layout>
      <Group position="apart" mb={30}>
        <Title order={1}>Projects</Title>
        <Title order={3}>
          <Link href="projects/repos">
            <a
              tabIndex={0}
              role="link"
              style={{
                textDecoration: 'none',
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.yellow[4]
                    : theme.colors.orange[7],
              }}
            >
              Github Repos
            </a>
          </Link>
        </Title>
      </Group>
      <Grid gutter="xl" grow>
        {isLoading ? (
          <CustomLoader />
        ) : (
          projects.map((project: IProjectProps) => (
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
          ))
        )}
      </Grid>
    </Layout>
  )
}

export default Projects
