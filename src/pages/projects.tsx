import { useState, useEffect } from 'react'
import { Title } from '@mantine/core'
import CustomLoader from '../components/CustomLoader/CustomLoader'
import Layout from '../components/Layout/Layout'
import Project from '../components/Project/Project'

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
      <Project
        image="https://github.com/aycanogut/todo-app-react/raw/main/src/assets/images/screenshot.gif"
        title="Todo App"
        description="Simple responsive todo app built with React. Users can add, complete and delete todo items. When the page is loaded, the app collects previous todos from localStorage."
        stack="React.js, styled-components"
        github="https://github.com/aycanogut/todo-app-react"
        vercel="https://todo-app-react-rosy.vercel.app/"
      />
    </Layout>
  )
}

export default Projects
