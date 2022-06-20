import { FC, useState } from 'react'
import { SegmentedControl, Title } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import Bookmark, { IBookmarkProps } from '../components/Bookmark/Bookmark'

interface IBookmarksProps {
  bookmarks: { items: [] }
}

interface IFilteredBookmarksProps {
  tags: [string]
}

const Bookmarks: FC<IBookmarksProps> = ({ bookmarks }) => {
  const [value, setValue] = useState<string>('blog')

  return (
    <Layout>
      <Title order={1} mb={30}>
        Bookmarks that I liked all around the web
      </Title>
      <SegmentedControl
        aria-label="Tabs"
        value={value}
        data={[
          { value: 'blog', label: 'Blogs' },
          { value: 'talk', label: 'Talks' },
          { value: 'javascript', label: 'JavaScript' },
          { value: 'react', label: 'React' },
          { value: 'webdev', label: 'Web Dev' },
          { value: 'design', label: 'Design' },
        ]}
        onChange={setValue}
        mb={30}
        sx={{ width: '100%' }}
        transitionDuration={300}
      />
      {bookmarks &&
        bookmarks.items.length &&
        bookmarks.items
          .filter(
            (filteredBookmark: IFilteredBookmarksProps) =>
              filteredBookmark.tags[0] === value
          )
          .map((bookmark: IBookmarkProps) => (
            <Bookmark
              key={bookmark._id}
              title={bookmark.title}
              link={bookmark.link}
            />
          ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.raindrop.io/rest/v1/raindrops/0?perpage=50&collectionId=25244220',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  )
  const bookmarks = await res.json()

  return {
    props: {
      bookmarks,
      revalidate: 3600000,
    },
  }
}

export default Bookmarks
