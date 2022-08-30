import React, { FC } from 'react'
import { Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'
import CustomLoader from '../components/CustomLoader/CustomLoader'
import Error from '../components/Error/Error'
import { IBlogProps, IPostProps } from '../ts/interfaces/Blog.interface'

const Blog: FC<IBlogProps> = () => {
  const { data, error } = useSWR<IPostProps>('api/medium', fetcher)

  if (error) return <Error />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Blog Posts
      </Title>
      <Article
        thumbnail="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg"
        title="Front End Resources"
        categories={['Web Development', 'Design', 'HTML', 'CSS', 'JavaScript']}
        link="https://www.github.com/aycanogut/front-end-resources"
      />
      {!data ? (
        <CustomLoader />
      ) : (
        data &&
        data.map((post: IPostProps) => (
          <Article
            key={post.title}
            thumbnail={post.thumbnail}
            title={post.title}
            categories={post.categories}
            link={post.link}
          />
        ))
      )}
    </Layout>
  )
}

export default Blog
