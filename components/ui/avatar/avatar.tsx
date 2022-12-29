/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from './avatar.module.css'

interface AvatarProps {
  alt: string
  src: string
  size?: 'avatar' | 'profile'
  type?: 'classic' | 'highlight' | 'warning' | 'info'
}
export const Avatar: FC<AvatarProps> = ({ type, size, src, alt }) => (
  <div className={styles.root} data-type={type} data-size={size}>
    <img src={src} alt={alt} className={styles.img} />
  </div>
)
