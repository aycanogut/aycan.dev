import { FC, useState } from 'react'
import { SegmentedControl, Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Layout from '../components/Layout/Layout'
import Bookmark, { IBookmarkProps } from '../components/Bookmark/Bookmark'

interface IBookmarksProps {
  length: IBookmarksProps | undefined
  items: []
  // filter: Function
  map: Function
  data: []
}

interface IFilteredBookmarksProps {
  tags: [string]
}

const Bookmarks: FC = () => {
  const { data } = useSWR<IBookmarksProps>('api/raindrop', fetcher)
  const [value, setValue] = useState<string>('blog')

  data && data.length && data.map((item: any) => console.log(item))

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
      {data &&
        data.length &&
        data
          // ?.filter(
          //   (filteredBookmark: IFilteredBookmarksProps) =>
          //     filteredBookmark.tags[0] === value
          // )
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
