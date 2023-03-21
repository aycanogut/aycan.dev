import { Grid, Title } from '@mantine/core'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import useSWR from 'swr'

import Layout from '../../../components/Layout/Layout'
import Loader from '../../../components/Loader/Loader'
import { IRepoProps } from '../../../interfaces/Repo.interface'
import fetcher from '../../../lib/fetcher'

const Repo = dynamic(() => import('../../../components/Repo/Repo'))
const Error = dynamic(() => import('../../../components/Error/Error'))

const Repos: FC<IRepoProps> = () => {
  const { data, error } = useSWR<IRepoProps>(process.env.GITHUB_URL, fetcher)

  if (!data) return <Loader />
  if (error) return <Error />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Repos
      </Title>
      <Grid gutter="lg" grow>
        {data &&
          data
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map(
              (repo: {
                id: number
                name: string
                html_url: string
                stargazers_count: number
              }) => (
                <Grid.Col span={12} xs={6} sm={4} key={repo.id}>
                  <Repo
                    title={repo.name}
                    url={repo.html_url}
                    starCount={repo.stargazers_count}
                  />
                </Grid.Col>
              )
            )}
      </Grid>
    </Layout>
  )
}

export default Repos
