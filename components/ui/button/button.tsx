import { FC, ReactNode } from 'react'
import styles from './button.module.css'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'normal' | 'twitch'
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  type = 'button',
  loading,
}) => (
  <button
    disabled={loading}
    className={styles.button}
    onClick={() => onClick?.()}
    data-variant={variant}
    type={type}
  >
    {children}
  </button>
)
