import { FC } from 'react'
import { ChannelButton } from '../channel/channel-button/channel-button'
import { Avatar } from '../ui/avatar/avatar'
import { Card } from '../ui/card/card'
import { DmsLogo } from '../ui/dms-logo/dms-logo'
import { HeaderResult } from './header'
import styles from './header.module.css'

export const HeaderView: FC<HeaderResult> = ({ session }) => (
  <div className={styles.container}>
    <Card>
      <header className={styles.header}>
        <DmsLogo />

        <ul className={styles.links}>
          <li className={styles.link}>
            <ChannelButton />
          </li>
          <li className={styles.link}>
            <Avatar
              alt="avatar"
              size="avatar"
              src={session.profile_image_url}
            />
          </li>
        </ul>
      </header>
    </Card>
  </div>
)
