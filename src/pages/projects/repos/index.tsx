import { FC } from 'react'
import dynamic from 'next/dynamic'
import { Grid, Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../../../lib/fetcher'
import Layout from '../../../components/Layout/Layout'
import CustomLoader from '../../../components/CustomLoader/CustomLoader'
import { IRepoProps } from '../../../interfaces/Repo.interface'

const Repo = dynamic(() => import('../../../components/Repo/Repo'))
const Error = dynamic(() => import('../../../components/Error/Error'))

const Repos: FC<IRepoProps> = () => {
  const { data, error } = useSWR<IRepoProps>(
    'https://api.github.com/users/aycanogut/repos',
    fetcher
  )

  if (!data) return <CustomLoader />
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
