import { FC } from 'react'
import { Button } from '../../ui/button/button'
import { FullScreenPopin } from '../../ui/fullscreen-popin/fullscreen-popin'
import { Channels } from '../channels/channels'
import { ChannelButtonResult } from './channel-button'

export const ChannelButtonView: FC<ChannelButtonResult> = ({
  channel,
  title,
}) => (
  <FullScreenPopin
    action={<Button variant="normal">{channel}</Button>}
    title={title}
  >
    <Channels />
  </FullScreenPopin>
)
