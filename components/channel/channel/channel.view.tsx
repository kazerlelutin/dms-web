import { FC } from 'react'
import { Chip } from '../../ui/chip/chip'
import { Flex } from '../../ui/flex/flex'
import { ChannelProps, ChannelResult } from './channel'
import styles from './channel.module.css'

export const ChannelView: FC<ChannelProps & ChannelResult> = ({
  handleSubmit,
  current,
  channel,
  loading,
  t,
}) => (
  <div className={styles.root}>
    <div className={styles.name}>{channel.name}</div>
    <div className={styles.actions} data-active={loading}>
      {current && <Chip text={t('active_channel')} type="highlight" />}
      {!current && (
        <Flex smallGap>
          <Chip
            type="classic"
            text={t('activated')}
            onClick={() => handleSubmit(channel.channel)}
          />
        </Flex>
      )}
    </div>
  </div>
)
