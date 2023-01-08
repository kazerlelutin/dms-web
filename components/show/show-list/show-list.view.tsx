import { FC } from 'react'
import { Col } from '../../ui/col/col'
import { ShowListResult } from './show-list'
import { ShowLine } from '../show-line/show-line'

export const ShowListView: FC<ShowListResult> = ({ shows, loading, myId }) => (
  <Col smallGap>
    {loading ? (
      <span>...</span>
    ) : (
      shows.map((show) => <ShowLine key={show.id} show={show} myId={myId} />)
    )}
  </Col>
)
