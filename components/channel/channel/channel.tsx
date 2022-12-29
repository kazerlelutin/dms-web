import { Factory } from '../../layouts/factory'
import { useChannel } from './channel.hook'
import { ChannelView } from './channel.view'

export interface ChannelProps {
  channel: { name: string; channel: string }
}

export interface ChannelResult {
  handleSubmit: (name: string) => void
  current: boolean
  loading: boolean
  t: (text: string) => string
}
export const Channel = Factory<ChannelProps, ChannelResult>(
  useChannel,
  ChannelView
)
