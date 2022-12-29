import { FC, ReactNode } from 'react'
import styles from './grid-box.module.css'

interface GridboxProps {
  children: ReactNode
}
export const Gridbox: FC<GridboxProps> = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.box}>{children}</div>
  </div>
)
