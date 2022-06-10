import React, { FC } from 'react'
import { Title } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'

interface IBlogProps {
  posts: {
    feed: {}
    items: []
    status: string
  }
}

interface IPostProps {
  thumbnail: string
  title: string
  link: string
  categories: any
  pubDate: string
}

const Blog: FC<IBlogProps> = ({ posts }) => (
  <Layout>
    <Title order={1} mb={30}>
      My Blog Posts
    </Title>
    <Article
      thumbnail="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg"
      title="Front End Resources"
      categories={['Web Development', 'Design', 'HTML', 'CSS', 'JavaScript']}
      link="https://www.github.com/aycanogut/front-end-resources"
    />
    {posts.items.map((post: IPostProps) => (
      <Article
        key={post.title}
        thumbnail={post.thumbnail}
        title={post.title}
        categories={post.categories}
        link={post.link}
      />
    ))}
  </Layout>
)

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aycanogut'
  )
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
