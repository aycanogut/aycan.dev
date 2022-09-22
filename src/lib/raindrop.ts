const token = process.env.RAINDROP_TOKEN
const token_endpoint = process.env.RAINDROP_URL

export const getBookmarks = async () => {
  const response = await fetch(token_endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.json()
}
