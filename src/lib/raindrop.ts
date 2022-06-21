const token = process.env.RAINDROP_TOKEN
const token_endpoint =
  'https://api.raindrop.io/rest/v1/raindrops/0?perpage=50&collectionId=25244220'

export const getBookmarks = async () => {
  const res = await fetch(token_endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await res.json()

  return data.items
}
