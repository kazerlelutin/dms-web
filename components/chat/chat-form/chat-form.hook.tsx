import { useContext, useState } from 'react'
import { useTranslate } from '../../hooks/translate.hook'
import { ChatContext } from '../chat.context'
import { ChatFormResult } from './chat-form'
import tmi from 'tmi.js'
import { ChannelContext } from '../../channel/channel.context'

export const useChatForm = (): ChatFormResult => {
  const t = useTranslate(),
    [value, setValue] = useState<string>(''),
    chat = useContext<tmi.Client>(ChatContext),
    [channel] = useContext(ChannelContext)

  const handleSubmit = async () => {
    chat.say(channel, value)
    setValue('')
  }

  return {
    text: t('send'),
    handleSubmit,
    value,
    setValue,
  }
}
