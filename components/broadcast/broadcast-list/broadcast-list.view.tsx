import { FC } from 'react'
import { BroadcastLine } from '../broadcast-line/broadcast-line'
import { BroadcastListResult } from './broadcast-list'
import { Col } from '../../ui/col/col'

export const BroadcastListView: FC<BroadcastListResult> = ({
  broadcasts,
  loading,
}) => (
  <Col smallGap>
    {loading ? (
      <span>...</span>
    ) : (
      broadcasts.map((broadcast) => (
        <BroadcastLine key={broadcast.id} broadcast={broadcast} />
      ))
    )}
  </Col>
)
