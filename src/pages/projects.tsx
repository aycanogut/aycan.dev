import { useState, useEffect } from 'react'
import { Grid, Title } from '@mantine/core'
import { projects } from '../helpers/projectsDummyData'
import Layout from '../components/Layout/Layout'
import Project from '../components/Project/Project'
import CustomLoader from '../components/CustomLoader/CustomLoader'
import { IProjectProps } from '../interfaces/Project.interface'

const Projects = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

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

      {isLoading ? (
        <CustomLoader />
      ) : (
        projects.map((project: IProjectProps) => (
          <Project
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            stack={project.stack}
            links={project.links}
          />
        ))
      )}
    </Layout>
  )
}

export default Projects
