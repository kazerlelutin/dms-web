import { FC } from 'react'
import { IShow } from '../../../types/show.interface'
import { Chip } from '../../ui/chip/chip'
import Link from 'next/link'
import { Flex } from '../../ui/flex/flex'
import { Pages } from '../../../types/pages.enum'
import styles from './show-line.module.css'
import { Session } from '../../session/session.provider'
import { Roles } from '../../../types/roles.enum'

interface ShowLineProps {
  show: IShow
  myId: Session['id']
}
export const ShowLine: FC<ShowLineProps> = ({ show, myId }) => (
  <Flex>
    <Chip
      text={
        show.users.find((user) => user.id === myId && user.role === Roles.OWNER)
          ? 'propriétaire'
          : 'spectateur'
      }
      type="highlight"
    />
    {show.name}
    <Link
      href={{
        query: {
          page: Pages.showDetail,
          broadcast: show.id,
        },
      }}
      className={styles.link}
    >
      <Chip text="voir" type="classic" />
    </Link>
  </Flex>
)
