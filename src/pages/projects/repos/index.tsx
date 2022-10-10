import { FC } from 'react'
import { Grid, Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../../../lib/fetcher'
import Layout from '../../../components/Layout/Layout'
import Repo from '../../../components/Repo/Repo'
import CustomLoader from '../../../components/CustomLoader/CustomLoader'
import Error from '../../../components/Error/Error'
import { IRepoProps } from '../../../interfaces/Repo.interface'

const Repos: FC<IRepoProps> = () => {
  const { data, error } = useSWR<IRepoProps>(
    'https://api.github.com/users/aycanogut/repos',
    fetcher
  )

  if (error) return <Error />

  return (
    <Layout>
      {!data ? (
        <CustomLoader />
      ) : (
        <>
          <Title order={1} mb={30}>
            Repos
          </Title>
          <Grid gutter="lg" grow>
            {data &&
              data
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map((repo: any) => (
                  <Grid.Col span={12} xs={6} sm={4} key={repo.id}>
                    <Repo
                      title={repo.name}
                      description={repo.description}
                      url={repo.html_url}
                      starCount={repo.stargazers_count}
                    />
                  </Grid.Col>
                ))}
          </Grid>
        </>
      )}
    </Layout>
  )
}

export default Repos
