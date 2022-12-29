import { FC, ReactNode } from 'react'
import { Flex } from '../flex/flex'
import { CloseIcon } from '../icons/close-icon'
import styles from './card.module.css'

interface CardProps {
  children: ReactNode
  type?: 'classic' | 'highlight' | 'warning' | 'info'
  title?: string
  strech?: boolean
  onClose?: () => void
}
export const Card: FC<CardProps> = ({
  children,
  type,
  title,
  onClose,
  strech,
}) => {
  return (
    <div className={styles.card} data-type={type} data-strech={strech}>
      {(title || onClose) && (
        <div className={styles.title}>
          <Flex spaceBetween>
            {title}
            {onClose && (
              <div className={styles.close} onClick={onClose}>
                <CloseIcon />
              </div>
            )}
          </Flex>
        </div>
      )}
      <div className={styles.main}>{children}</div>
    </div>
  )
}
