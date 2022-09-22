const token_endpoint = process.env.GITHUB_URL

export const getRepos = async () => {
  const response = await fetch(token_endpoint, {
    method: 'GET',
  })

  return response.json()
}
