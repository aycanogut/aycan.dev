export const getBlogPosts = async () => {
  const response = await fetch(process.env.MEDIUM_URL, {
    method: 'GET',
  })

  return response.json()
}
