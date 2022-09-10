// https://leerob.io/snippets/spotify

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const now_playing_endpoint =
  'https://api.spotify.com/v1/me/player/currently-playing'
const token_endpoint = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(token_endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
