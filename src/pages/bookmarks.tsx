import { FC, useState } from 'react'
import { SegmentedControl, Title } from '@mantine/core'
import { getBookmarks } from '../lib/raindrop'
import Layout from '../components/Layout/Layout'
import Bookmark, { IBookmarkProps } from '../components/Bookmark/Bookmark'

interface IBookmarksProps {
  bookmarks: any
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
      {typeof bookmarks !== undefined ? (
        bookmarks
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
          ))
      ) : (
        <Title order={3} align="center">
          Connection error
        </Title>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const bookmarks = await getBookmarks()

  return {
    props: {
      bookmarks,
    },
  }
}

export default Bookmarks
