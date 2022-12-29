import { FC, ReactNode } from 'react'
import styles from './info.module.css'

interface InfoProps {
  children: ReactNode
}

export const Info: FC<InfoProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)
