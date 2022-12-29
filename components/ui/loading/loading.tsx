import { FC } from 'react'
import { useTranslate } from '../../hooks/translate.hook'
import { Flex } from '../flex/flex'
import styles from './loading.module.css'

export const LoadingView: FC = () => {
  const t = useTranslate()
  return (
    <div className={styles.root}>
      <Flex center>{t('loading')}</Flex>
    </div>
  )
}
