import React, { useState, useEffect, FC } from 'react'
import { Container, Grid, Title } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import Card from '../components/Article/Article'

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
    <Container size="md" px="xl">
      <Title order={1}>My Blog Posts</Title>
      <Card
        thumbnail="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg"
        title="Front End Resources"
        categories={['Web Development', 'Design', 'HTML', 'CSS', 'JavaScript']}
        link="https://www.github.com/aycanogut/front-end-resources"
      />
      {posts.items.map((post: IPostProps) => (
        <Card
          key={post.title}
          thumbnail={post.thumbnail}
          title={post.title}
          categories={post.categories}
          link={post.link}
        />
      ))}
    </Container>
  </Layout>
)

export async function getStaticProps() {
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
