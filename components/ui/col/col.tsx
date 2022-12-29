import { FC, ReactNode } from 'react'
import styles from './col.module.css'

interface ColProps {
  children: ReactNode
  center?: boolean
  reverse?: boolean
  smallGap?: boolean
  left?: boolean
  right?: boolean
}

export const Col: FC<ColProps> = (props) => (
  <div
    className={`${styles.col} ${Object.keys(props)
      .map((className) => styles[className])
      .join(' ')}`}
  >
    {props.children}
  </div>
)
