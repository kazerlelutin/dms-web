import { Factory } from '../../layouts/factory'
import { useChannelButton } from './channel-button.hook'
import { ChannelButtonView } from './channel-button.view'

export interface ChannelButtonResult {
  channel: string
  title: string
}
export const ChannelButton = Factory<unknown, ChannelButtonResult>(
  useChannelButton,
  ChannelButtonView
)
