import { FC, ReactNode } from 'react'
import { HeaderNoAuth } from '../../ui/header-no-auth/header-no-auth'
import styles from './no-auth.module.css'

interface NoAuthLayoutProps {
  children: ReactNode
}

export const NoAuthLayout: FC<NoAuthLayoutProps> = ({ children }) => (
  <div className={styles.container}>
    <HeaderNoAuth />
    <div className={styles.content}>
      <main className={styles.main}>{children}</main>
    </div>
  </div>
)
