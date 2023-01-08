import { FC } from 'react'
import { BroadcastType } from '../../../types/broadcast.type'
import { Flex } from '../../ui/flex/flex'
import { Chip } from '../../ui/chip/chip'
import Link from 'next/link'
import styles from './broadcast-line.module.css'
import { Pages } from '../../../types/pages.enum'

interface BroadcastLineProps {
  broadcast: BroadcastType
}
export const BroadcastLine: FC<BroadcastLineProps> = ({ broadcast }) => (
  <Flex>
    <Chip text={broadcast.channel} type="highlight" />
    {broadcast.name}
    <Link
      href={{
        query: {
          page: Pages.broadcastDetail,
          broadcast: broadcast.id,
        },
      }}
      className={styles.link}
    >
      <Chip text="voir" type="classic" />
    </Link>
  </Flex>
)
