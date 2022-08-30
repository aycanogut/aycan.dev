import type { NextApiRequest, NextApiResponse } from 'next'
import { getBookmarks } from '../../lib/raindrop'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getBookmarks()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isBookmark: false })
  }

  const result = await response
  const bookmarks = result.items

  if (bookmarks === null) {
    return res.status(200).json({ isBookmark: false })
  }

  return res.status(200).json(bookmarks)
}
