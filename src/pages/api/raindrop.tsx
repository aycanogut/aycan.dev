import type { NextApiRequest, NextApiResponse } from 'next'
import { getBookmarks } from '../../lib/raindrop'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getBookmarks()

  if (response.status === 204 || response.status > 400) {
    console.log('error')
    return res.status(200).json({ isBookmark: false })
  }

  const result = await response
  const bookmarks = result.items

  if (bookmarks === null) {
    console.log('empty')
    return res.status(200).json({ isBookmark: false })
  }

  return res.status(200).json(bookmarks)
}
