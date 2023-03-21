import { Box, SegmentedControl, Title } from '@mantine/core'
import dynamic from 'next/dynamic'
import { FC, useState } from 'react'
import useSWR from 'swr'

import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import { collections } from '../../data/collections'
import useWidth from '../../hooks/useWidth'
import {
  IBookmarkProps,
  IBookmarksProps,
} from '../../interfaces/Bookmark.interface'
import { getBookmarks } from '../../lib/raindrop'

const Bookmark = dynamic(() => import('../../components/Bookmark/Bookmark'))
const Error = dynamic(() => import('../../components/Error/Error'))

const Bookmarks: FC<IBookmarksProps> = () => {
  const [activeTab, setActiveTab] = useState<string>(collections.blogs)
  const { data, error } = useSWR(
    `${process.env.RAINDROP_URL}${activeTab}`,
    getBookmarks
  )
  const { width } = useWidth()

  const updateActiveTab = (collection: string) => {
    setActiveTab(collection)
  }

  if (error) return <Error />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Bookmarks that I liked all around the web
      </Title>
      <SegmentedControl
        aria-label="Tabs"
        value={activeTab}
        data={[
          { value: collections.blogs, label: 'Blogs' },
          { value: collections.podcasts, label: 'Podcasts' },
          { value: collections.talks, label: 'Talks' },
          { value: collections.books, label: 'Books' },
          { value: collections.js, label: 'JavaScript' },
          { value: collections.webdev, label: 'Web Dev' },
        ]}
        onChange={updateActiveTab}
        mb={30}
        sx={{ width: '100%', zIndex: 0 }}
        transitionDuration={300}
        fullWidth
        orientation={width && width < 750 ? 'vertical' : 'horizontal'}
      />
      {!data ? (
        <Box sx={{ position: 'relative', height: '100%', paddingTop: '50%' }}>
          <Loader />
        </Box>
      ) : (
        data &&
        data.items.map((bookmark: IBookmarkProps) => (
          <Bookmark
            key={bookmark._id}
            title={bookmark.title}
            link={bookmark.link}
          />
        ))
      )}
    </Layout>
  )
}

export default Bookmarks
