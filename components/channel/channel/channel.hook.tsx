import { useContext, useEffect, useState } from 'react'
import { usePost } from '../../hooks/post.hook'

import { useTranslate } from '../../hooks/translate.hook'
import { MiniLoaderContext } from '../../mini-loader/mini-loader.context'
import { ChannelContext } from '../channel.context'
import { ChannelResult } from './channel'

export const useChannel = ({ channel }): ChannelResult => {
  const [loading] = useContext(MiniLoaderContext),
    [channelCtx, setChannel] = useContext(ChannelContext),
    t = useTranslate(),
    { data, post } = usePost<{ name: string }>('channel/active')

  useEffect(() => {
    if (data) {
      setChannel(data?.name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return {
    loading: data ? false : loading,
    current: channel.channel === channelCtx,
    t,
    handleSubmit: (name: string) => {
      if (loading) return
      post({ name })
    },
  }
}
