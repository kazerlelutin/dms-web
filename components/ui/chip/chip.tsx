import { FC } from 'react'
import styles from './chip.module.css'

interface ChipProps {
  type?: 'classic' | 'highlight' | 'warning' | 'info'
  text: string
  onClick?: () => void
}
export const Chip: FC<ChipProps> = ({ text, onClick, type }) => (
  <div
    className={styles.chip}
    data-type={type}
    onClick={() => {
      if (onClick) onClick()
    }}
    data-cursor={`${!!onClick}`}
  >
    {text}
  </div>
)
