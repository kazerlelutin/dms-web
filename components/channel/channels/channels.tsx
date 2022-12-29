import { useTwitch } from '../../hooks/twitch.hook'
import { Factory } from '../../layouts/factory'
import { ChannelsContext } from './channels.context'
import { useChannels } from './channels.hook'
import { ChannelsView } from './channels.view'

export interface ChannelsResult {
  pagination: Object
  channels: { name: string; channel: string }[]
  loading: boolean
}
const ChannelsFactory = Factory<unknown, ChannelsResult>(
  useChannels,
  ChannelsView
)

export const Channels: React.FC = () => {
  const ctx = useTwitch<{
    pagination: Object
    channels: { name: string; channel: string }[]
  }>('follows')

  return (
    <ChannelsContext.Provider value={ctx}>
      <ChannelsFactory />
    </ChannelsContext.Provider>
  )
}
