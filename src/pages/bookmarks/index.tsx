import { FC, useState } from 'react'
import { SegmentedControl, Title } from '@mantine/core'
import useSWR from 'swr'
import useWidth from '../../hooks/useWidth'
import { getBookmarks } from '../../lib/raindrop'
import { collections } from '../../data/collections'
import Layout from '../../components/Layout/Layout'
import Bookmark from '../../components/Bookmark/Bookmark'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import Error from '../../components/Error/Error'
import {
  IBookmarksProps,
  IBookmarkProps,
} from '../../interfaces/Bookmark.interface'

const Bookmarks: FC<IBookmarksProps> = () => {
  const [activeTab, setActiveTab] = useState<string>(collections.blogs)
  const { data, error } = useSWR(
    `https://api.raindrop.io/rest/v1/raindrops/${activeTab}`,
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
          { value: collections.react, label: 'React' },
          { value: collections.webdev, label: 'Web Dev' },
          { value: collections.design, label: 'Design' },
        ]}
        onChange={updateActiveTab}
        mb={30}
        sx={{ width: '100%', zIndex: 0 }}
        transitionDuration={300}
        fullWidth
        orientation={width && width < 750 ? 'vertical' : 'horizontal'}
      />
      {!data ? (
        <CustomLoader />
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
