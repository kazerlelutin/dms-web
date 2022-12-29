import { FC, ReactNode } from 'react'
import styles from './flex.module.css'

interface FlexProps {
  children: ReactNode
  center?: boolean
  reverse?: boolean
  wrap?: boolean
  spaceBetween?: boolean
  smallGap?: boolean
}
export const Flex: FC<FlexProps> = (props) => (
  <div
    className={`${styles.flex} ${Object.keys(props)
      .map((className) => styles[className])
      .join(' ')}`}
  >
    {props.children}
  </div>
)
