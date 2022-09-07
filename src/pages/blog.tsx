import React, { FC } from 'react'
import { Grid, Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Layout from '../components/Layout/Layout'
import Article from '../components/Article/Article'
import CustomLoader from '../components/CustomLoader/CustomLoader'
import Error from '../components/Error/Error'
import { IBlogProps, IArticleProps } from '../ts/interfaces/Blog.interface'

const Blog: FC<IBlogProps> = () => {
  const { data, error } = useSWR<IArticleProps>('api/medium', fetcher)

  if (error) return <Error />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Blog Posts
      </Title>
      <Grid>
        {!data ? (
          <CustomLoader />
        ) : (
          data &&
          data.map((article: IArticleProps) => (
            <Grid.Col sm={6} md={4}>
              <Article
                key={article.title}
                title={article.title}
                categories={article.categories}
                link={article.link}
                pubDate={article.pubDate}
              />
            </Grid.Col>
          ))
        )}
      </Grid>
    </Layout>
  )
}

export default Blog
