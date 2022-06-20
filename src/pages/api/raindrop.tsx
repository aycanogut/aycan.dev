import type { NextApiRequest, NextApiResponse } from 'next'
import { getBookmarks } from '../../lib/raindrop'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getBookmarks()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({})
  }

  const result = await response.json()
  const bookmarks = result.items

  return res.status(200).json(bookmarks)
}
