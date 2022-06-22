import { FC, useEffect, useState } from 'react'
import { SegmentedControl, Title } from '@mantine/core'
// import { getBookmarks } from '../lib/raindrop'
import Layout from '../components/Layout/Layout'
import Bookmark, { IBookmarkProps } from '../components/Bookmark/Bookmark'

interface IBookmarksProps {
  bookmarks: any
}

interface IFilteredBookmarksProps {
  tags: [string]
}

const Bookmarks: FC<IBookmarksProps> = () => {
  const [value, setValue] = useState<string>('blog')
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const getBookmarks = async () => {
      const res = await fetch(
        'https://api.raindrop.io/rest/v1/raindrops/0?perpage=50&collectionId=25244220',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer 4d324425-6f14-47a5-b5e8-942cb724173d',
          },
        }
      )

      const data: { items: [] } = await res.json()
      const items: [] = data?.items

      setBookmarks(items)
    }
    getBookmarks()
  }, [])

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
      {bookmarks
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

export default Bookmarks
