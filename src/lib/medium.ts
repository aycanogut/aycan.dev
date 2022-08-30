export const getBlogPosts = async () => {
  const response = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aycanogut',
    {
      method: 'GET',
    }
  )

  return response.json()
}
