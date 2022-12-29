import { FC, ReactNode } from 'react'
import styles from './label.module.css'

interface LabelProps {
  children: ReactNode
  required?: boolean
}

export const Label: FC<LabelProps> = ({ children, required }) => (
  <label aria-required={required} className={styles.label}>
    {children}
    {required && <sup className={styles.star}>{'*'}</sup>}
  </label>
)
