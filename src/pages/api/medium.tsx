import type { NextApiRequest, NextApiResponse } from 'next'
import { getBlogPosts } from '../../lib/medium'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getBlogPosts()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isBlogPost: false })
  }

  const result = await response
  const blogPost = result.items

  if (blogPost === null) {
    return res.status(200).json({ isBlogPost: false })
  }

  return res.status(200).json(blogPost)
}
