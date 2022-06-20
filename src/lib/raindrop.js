const token = process.env.RAINDROP_TOKEN
const token_endpoint =
  'https://api.raindrop.io/rest/v1/raindrops/0?perpage=50&collectionId=25244220'

export const getBookmarks = async () => {
  const response = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aycanogut'
    // {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  )
  const data = await response.json()
  return data
}
