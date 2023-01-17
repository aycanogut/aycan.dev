export const getBookmarks = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
    },
  })
  return response.json()
}
