import { FC } from 'react'
import { useTranslate } from '../../hooks/translate.hook'
import { Button } from '../../ui/button/button'
import { FullScreenPopin } from '../../ui/fullscreen-popin/fullscreen-popin'
import { ShowCreateForm } from '../show-create-form/show-create-form'
import styles from './show-create-popin.module.css'

export const ShowCreatePopin: FC = () => {
  const t = useTranslate()

  return (
    <FullScreenPopin
      action={<Button>{t('create_show')}</Button>}
      title={t('create_show')}
    >
      <div className={styles.container}>
        <ShowCreateForm />
      </div>
    </FullScreenPopin>
  )
}
