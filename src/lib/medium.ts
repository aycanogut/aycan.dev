const token_endpoint =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aycanogut'

export const getBlogPosts = async () => {
  const response = await fetch(token_endpoint, {
    method: 'GET',
  })

  return response.json()
}
