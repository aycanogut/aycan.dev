const token_endpoint = process.env.MEDIUM_URL

export const getBlogPosts = async () => {
  const response = await fetch(token_endpoint, {
    method: 'GET',
  })

  return response.json()
}
