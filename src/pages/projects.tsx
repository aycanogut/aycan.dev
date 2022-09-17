import { useState, useEffect } from 'react'
import { Grid, Title } from '@mantine/core'
import { projects } from '../helpers/projectsDummyData'
import Layout from '../components/Layout/Layout'
import Project from '../components/Project/Project'
import CustomLoader from '../components/CustomLoader/CustomLoader'
import { IProjectProps } from '../interfaces/Project.interface'

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  //TODO replace with CustomLoader when API is ready
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <Layout>
      <Title order={1} mb={30}>
        Projects
      </Title>
      <Grid gutter="xl">
        {isLoading ? (
          <CustomLoader />
        ) : (
          projects.map((project: IProjectProps) => (
            <Grid.Col xs={12} sm={6} key={project.id}>
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
