import React, { useState, useEffect, FC } from 'react'
import { Container, Grid } from '@mantine/core'
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
  categories: []
  pubDate: string
}

const Blog: FC<IBlogProps> = ({ posts }) => (
  <Layout>
    <Container size="md" px="xl">
      {posts.items.map((post: IPostProps) => (
        <Card
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
