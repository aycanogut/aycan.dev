const token_endpoint = 'https://api.github.com/users/aycanogut/repos'

export const getRepos = async () => {
  const response = await fetch(token_endpoint, {
    method: 'GET',
  })

  return response.json()
}
