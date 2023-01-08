import { FC } from 'react'
import { PromiseRender } from '../../promise-render/promise-render'
import { Col } from '../../ui/col/col'
import { LineLoader } from '../../ui/line-loader/line-loader'
import { ShowLine } from '../show-line/show-line'
import { ShowLastListResult } from './show-last-list'

export const ShowLastListView: FC<ShowLastListResult> = ({
  data: shows,
  loading,
  myId,
}) => (
  <Col smallGap>
    <PromiseRender
      data={shows}
      loading={loading}
      loader={<LineLoader numberOfLine={5} />}
    >
      {shows?.map((show) => (
        <ShowLine key={show.id} show={show} myId={myId} />
      ))}
    </PromiseRender>
  </Col>
)
