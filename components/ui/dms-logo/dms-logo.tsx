import Link from 'next/link'
import { FC } from 'react'
import styles from './dms-logo.module.css'

export const DmsLogo: FC = () => (
  <div className={styles.logo}>
    <Link href="/">
      <div className={styles.logoLink}>Drive My show</div>
    </Link>
  </div>
)
