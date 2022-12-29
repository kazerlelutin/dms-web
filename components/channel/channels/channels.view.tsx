import { FC } from 'react'
import { Col } from '../../ui/col/col'
import { Channel } from '../channel/channel'
import { ChannelLoader } from './channel-loader/channel-loader'
import { ChannelsResult } from './channels'
import styles from './channels.module.css'

export const ChannelsView: FC<ChannelsResult> = ({ channels, loading }) => (
  <div className={styles.container}>
    <Col smallGap>
      {loading &&
        Array.from(Array(8).keys()).map((num) => <ChannelLoader key={num} />)}
      {channels
        .sort((a, b) => a.channel.localeCompare(b.channel))
        .map((channel) => (
          <Channel key={channel.name} channel={channel} />
        ))}
    </Col>
  </div>
)
