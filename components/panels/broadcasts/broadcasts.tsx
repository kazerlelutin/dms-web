import { FC } from 'react'
import { BroadcastList } from '../../broadcast/broadcast-list/broadcast-list'
import { Card } from '../../ui/card/card'
import { Col } from '../../ui/col/col'
import styles from './broadcasts.module.css'

export const Broadcasts: FC = () => (
  <div className={styles.container}>
    <Col>
      <Card title="show" type="classic">
        <BroadcastList />
      </Card>
    </Col>
  </div>
)
