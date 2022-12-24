import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Grid, Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Layout from '../../components/Layout/Layout'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import { IBlogProps, IArticleProps } from '../../interfaces/Blog.interface'

const Article = dynamic(() => import('../../components/Article/Article'))
const Error = dynamic(() => import('../../components/Error/Error'))

const Articles: FC<IBlogProps> = () => {
  const { data, error } = useSWR<IArticleProps>('api/medium', fetcher)

  if (!data) return <CustomLoader />
  if (error) return <Error />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Articles
      </Title>
      <Grid gutter="xl" grow>
        {data &&
          data.map((article: IArticleProps) => (
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
