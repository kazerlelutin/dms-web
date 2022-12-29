import { FC } from 'react'
import { TwitchButton } from '../../twitch-button/twitch-button'
import { Card } from '../card/card'
import { DmsLogo } from '../dms-logo/dms-logo'
import styles from './header-no-auth.module.css'

export const HeaderNoAuth: FC = () => (
  <div className={styles.container}>
    <Card>
      <header className={styles.header}>
        <DmsLogo />
        <ul>
          <li>
            <TwitchButton />
          </li>
        </ul>
      </header>
    </Card>
  </div>
)
