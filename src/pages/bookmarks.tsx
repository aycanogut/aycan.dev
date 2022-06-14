import { FC, useState } from 'react'
import { SegmentedControl, Title } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import Bookmark, { IBookmarkProps } from '../components/Bookmark/Bookmark'
import { bookmarkIds } from '../components/Bookmark/bookmarkIds'

interface IBookmarksProps {
  bookmarks: {
    items: []
  }
}

const Bookmarks: FC<IBookmarksProps> = ({ bookmarks }) => {
  const [value, setValue] = useState<string>('')

  return (
    <Layout>
      <Title order={1} mb={30}>
        Bookmarks that I liked all around the web
      </Title>
      <SegmentedControl
        aria-label="Tabs"
        value={value}
        data={[
          { value: 'blogs', label: 'Blogs' },
          { value: 'js', label: 'JavaScript' },
          { value: 'react', label: 'React' },
          { value: 'webdev', label: 'Web Development' },
          { value: 'design', label: 'Design' },
          { value: 'recipes', label: 'Recipes' },
        ]}
        onChange={setValue}
        mb={30}
        sx={{ width: '100%' }}
      />
      {/* {bookmarks.items.map((bookmark: IBookmarkProps) => (
        <Bookmark
          key={bookmark._id}
          title={bookmark.title}
          link={bookmark.link}
        />
      ))} */}
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(
//     'https://api.raindrop.io/rest/v1/raindrops/25244220',
//     {
//       method: 'get',
//       headers: {
//         Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
//       },
//     }
//   )

//   const bookmarks = await res.json()

//   return {
//     props: {
//       bookmarks,
//     },
//   }
// }

export default Bookmarks
