import { FC } from 'react'
import { TwitchResults } from './twitch'

export const TwitchView: FC<TwitchResults> = ({ t }) => (
  <div>
    <h1>{t('twitch_wait')}</h1>
  </div>
)
