import { FC } from 'react'
import { useTranslate } from '../../hooks/translate.hook'
import { Button } from '../../ui/button/button'
import { FullScreenPopin } from '../../ui/fullscreen-popin/fullscreen-popin'
import { BroadcastCreateForm } from '../broadcast-create-form/broadcast-create-form'
import styles from './broadcast-create-popin.module.css'

export const BroadcastCreatePopin: FC = () => {
  const t = useTranslate()

  return (
    <FullScreenPopin
      action={<Button>{t('create_show')}</Button>}
      title={t('create_show')}
    >
      <div className={styles.container}>
        <BroadcastCreateForm />
      </div>
    </FullScreenPopin>
  )
}
