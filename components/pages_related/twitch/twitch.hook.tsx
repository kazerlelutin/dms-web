import { useRouter } from 'next/router'
import queryString from 'query-string'
import { useEffect } from 'react'
import { setCookie } from '../../../utils/set-cookie'
import { useTranslate } from '../../hooks/translate.hook'
import { TwitchResults } from './twitch'

export const useTwitch = (): TwitchResults => {
  const t = useTranslate()
  const router = useRouter()

  useEffect(() => {
    const tokens: null | { access_token?: string } = queryString.parse(
      document.location.hash.replace('#', '')
    )

    if (tokens && tokens?.access_token) {
      setCookie(tokens.access_token)
      document.location.hash = ''
      router.push('/dashboard')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    t,
  }
}
