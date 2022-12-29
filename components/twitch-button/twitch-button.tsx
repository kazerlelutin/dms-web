import { FC, useEffect, useState } from 'react'
import { useTranslate } from '../hooks/translate.hook'
import { Button } from '../ui/button/button'
import queryString from 'query-string'
import styles from './twitch-button.module.css'
import { useCreateLink } from '../hooks/create-link.hook'

export const TwitchButton: FC = () => {
  const t = useTranslate({
    login_twitch: {
      fr: 'Connexion avec Twitch',
      en: 'Connexion width Twitch',
    },
  })
  const [params, setParams] = useState<Object | null>(null)
  const l = useCreateLink()

  useEffect(() => {
    setParams({
      redirect_uri: l('twitch/'),
      client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
      response_type: 'token+id_token',
      scope:
        'channel%3Amanage%3Apolls+channel%3Aread%3Apolls+user%3Aread%3Afollows+chat%3Aread+chat%3Aedit+openid',
    })
  }, [setParams, l])

  return params ? (
    <a
      className={styles.link}
      href={`${process.env.NEXT_PUBLIC_TWITCH_URL_AUTH}?${queryString.stringify(
        params,
        {
          encode: false,
        }
      )}`}
    >
      <Button variant="twitch">{t('login_twitch')}</Button>
    </a>
  ) : (
    <></>
  )
}
