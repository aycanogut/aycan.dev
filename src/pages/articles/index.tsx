import React, { FC } from 'react'
import { Grid, Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import Layout from '../../components/Layout/Layout'
import Article from '../../components/Article/Article'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import Error from '../../components/Error/Error'
import { IBlogProps, IArticleProps } from '../../interfaces/Blog.interface'

const Articles: FC<IBlogProps> = () => {
  const { data, error } = useSWR<IArticleProps>('api/medium', fetcher)

  if (error) return <Error />

  return (
    <Layout>
      {!data ? (
        <CustomLoader />
      ) : (
        <>
          <Title order={1} mb={30}>
            Articles
          </Title>
          <Grid gutter="xl" grow>
            {data &&
              data.map((article: IArticleProps, i: number) => (
                <Grid.Col xs={12} sm={6} md={4} key={i}>
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
        </>
      )}
    </Layout>
  )
}

export default Articles
