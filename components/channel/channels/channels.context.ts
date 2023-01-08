import { createContext } from 'react'
import { FetchResult } from '../../hooks/fetch.hook'

export const ChannelsContext = createContext<
  FetchResult<{
    pagination: Object
    channels: { name: string; channel: string }[]
  }>
>(null)
