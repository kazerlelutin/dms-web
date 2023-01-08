import { FC } from 'react'
import { Col } from '../col/col'
import styles from './line-loader.module.css'

interface LineLoaderProps {
  numberOfLine: number
}

export const LineLoader: FC<LineLoaderProps> = ({ numberOfLine }) => (
  <Col smallGap>
    {Array.from(Array(numberOfLine).keys()).map((num) => (
      <div key={num} className={styles.root} />
    ))}
  </Col>
)
