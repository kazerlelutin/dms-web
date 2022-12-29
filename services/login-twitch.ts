import { NextRequest } from 'next/server'
import { COOKIE_NAME } from '../utils/set-cookie'

export const loginTwitch = async (req: NextRequest) => {
  const TWITCH_CLIENT_ID = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID
  const token = req.cookies[COOKIE_NAME]
  if (!token) {
    return {
      redirect: { destination: '/' },
    }
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/twitch/login`, {
    headers: {
      'Client-ID': TWITCH_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: 'Bearer ' + token,
    },
  })

  const resJson = await res.json()

  if (res.status !== 200) {
    return {
      redirect: { destination: '/' },
    }
  }

  return {
    props: {
      session: { ...resJson, token },
    },
  }
}
