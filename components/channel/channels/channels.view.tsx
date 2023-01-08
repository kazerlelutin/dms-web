import { FC } from 'react'
import { PromiseRender } from '../../promise-render/promise-render'
import { Col } from '../../ui/col/col'
import { LineLoader } from '../../ui/line-loader/line-loader'
import { Channel } from '../channel/channel'
import { ChannelsResult } from './channels'
import styles from './channels.module.css'

export const ChannelsView: FC<ChannelsResult> = ({ channels, loading }) => (
  <div className={styles.container}>
    <Col smallGap>
      <PromiseRender
        data={channels}
        loading={loading}
        loader={<LineLoader numberOfLine={10} />}
      >
        {channels
          .sort((a, b) => a.channel.localeCompare(b.channel))
          .map((channel) => (
            <Channel key={channel.name} channel={channel} />
          ))}
      </PromiseRender>
    </Col>
  </div>
)
