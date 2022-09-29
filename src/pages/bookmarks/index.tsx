import { FC, useState } from 'react'
import { SegmentedControl, Title } from '@mantine/core'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import useWidth from '../../hooks/useWidth'
import Layout from '../../components/Layout/Layout'
import Bookmark from '../../components/Bookmark/Bookmark'
import CustomLoader from '../../components/CustomLoader/CustomLoader'
import Error from '../../components/Error/Error'
import {
  IBookmarksProps,
  IBookmarkProps,
  IFilteredBookmarksProps,
} from '../../interfaces/Bookmark.interface'

const Bookmarks: FC<IBookmarksProps> = () => {
  const { data, error } = useSWR<IBookmarksProps>('api/raindrop', fetcher)
  const [value, setValue] = useState<string>('blog')
  const { width } = useWidth()

  if (error) return <Error />

  return (
    <Layout>
      {!data ? (
        <CustomLoader />
      ) : (
        <>
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
            fullWidth
            orientation={width && width > 450 ? 'horizontal' : 'vertical'}
          />
          {data &&
            data
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
        </>
      )}
    </Layout>
  )
}

export default Bookmarks
