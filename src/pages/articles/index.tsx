import { Grid, Title } from '@mantine/core'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import useSWR from 'swr'

import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import { IArticleProps, IBlogProps } from '../../interfaces/Blog.interface'
import fetcher from '../../lib/fetcher'

const Article = dynamic(() => import('../../components/Article/Article'))
const Error = dynamic(() => import('../../components/Error/Error'))

const Articles: FC<IBlogProps> = () => {
  const { data, error } = useSWR<IArticleProps>(process.env.MEDIUM_URL, fetcher)

  if (!data) return <Loader />
  if (error) return <Error />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Articles
      </Title>
      <Grid gutter="xl" grow>
        {data &&
          data.items.map((article: IArticleProps) => (
            <Grid.Col xs={12} sm={6} md={4} key={article.title}>
              <Article
                key={article.title}
                title={article.title}
                categories={article.categories}
                link={article.link}
                pubDate={article.pubDate}
              />
            </Grid.Col>
          ))}
      </Grid>
    </Layout>
  )
}

export default Articles
