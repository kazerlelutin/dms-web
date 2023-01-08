import Link from 'next/link'
import { FC } from 'react'
import { Pages } from '../../../types/pages.enum'
import styles from './dms-logo.module.css'

export const DmsLogo: FC = () => (
  <div className={styles.logo}>
    <Link
      href={{
        query: {
          page: Pages.dashboard,
        },
      }}
    >
      <div className={styles.logoLink}>Drive My show</div>
    </Link>
  </div>
)
