import { FC, ReactNode, useContext } from 'react'
import { Card } from '../card/card'
import { FullscreenPopinContext } from './fullscreen-popin.context'
import styles from './fullscreen-popin.module.css'

interface FullScreenPopinCardProps {
  children: ReactNode
  title: string
}
export const FullScreenPopinCard: FC<FullScreenPopinCardProps> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = useContext(FullscreenPopinContext)

  return (
    isOpen && (
      <div className={styles.container}>
        <div className={styles.content}>
          <Card title={title} onClose={() => setIsOpen(false)} type="classic">
            {children}
          </Card>
        </div>
      </div>
    )
  )
}
