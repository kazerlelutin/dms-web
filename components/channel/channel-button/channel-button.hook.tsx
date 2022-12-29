import { useContext } from 'react'
import { useTranslate } from '../../hooks/translate.hook'
import { ChannelContext } from '../channel.context'
import { ChannelButtonResult } from './channel-button'

export const useChannelButton = (): ChannelButtonResult => {
  const [channel] = useContext(ChannelContext),
    t = useTranslate()

  return {
    channel: channel,
    title: t('title_channel_button'),
  }
}
