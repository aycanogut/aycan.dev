import type { NextApiRequest, NextApiResponse } from 'next'
import { getBookmarks } from '../../lib/raindrop'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getBookmarks()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ data: false })
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  const result = await response
  const bookmarks = result.items

  return res.status(200).json(bookmarks)
}
