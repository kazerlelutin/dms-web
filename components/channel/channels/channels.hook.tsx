import { useContext } from 'react'
import { ChannelsContext } from './channels.context'
import { ChannelsResult } from './channels'

export const useChannels = (): ChannelsResult => {
  const { data, loading } = useContext(ChannelsContext)

  return {
    channels: data?.channels || [],
    pagination: data?.pagination,
    loading: data ? false : loading,
  }
}
