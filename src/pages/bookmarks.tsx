import { FC } from 'react'
import { Title } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import Bookmark, { IBookmarkProps } from '../components/Bookmark/Bookmark'

interface IBookmarksProps {
  bookmarks: {
    items: []
  }
}

const Bookmarks: FC<IBookmarksProps> = ({ bookmarks }) => (
  <Layout>
    <Title order={1} mb={30}>
      Bookmarks that I liked all around the web
    </Title>
    {bookmarks.items.map((bookmark: IBookmarkProps) => (
      <Bookmark
        key={bookmark._id}
        title={bookmark.title}
        link={bookmark.link}
      />
    ))}
  </Layout>
)

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.raindrop.io/rest/v1/raindrops/23246795',
    {
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  )

  const bookmarks = await res.json()

  return {
    props: {
      bookmarks,
    },
  }
}

export default Bookmarks
