import Link from 'next/link'
import { FC } from 'react'
import { Pages } from '../../types/pages.enum'
import { BreadcrumbResult } from './breadcrumb'
import styles from './breadcrumb.module.css'

export const BreadcrumbView: FC<BreadcrumbResult> = ({ page, t }) => (
  <div className={styles.container}>
    {page !== Pages.dashboard && (
      <Link
        href={{
          query: {
            page: Pages.dashboard,
          },
        }}
      >
        {t('dashboard')}
      </Link>
    )}
    {page === Pages.chronicleDetail && (
      <Link
        href={{
          query: {
            page: Pages.chronicleDetail,
          },
        }}
      >
        {t('broadcast')}
      </Link>
    )}
    {page === Pages.shows && '/ Shows'}
  </div>
)
