import { FC, ReactNode } from 'react'
import { FullscreenPopinProvider } from './fullscreen-popin.provider'
import { FullScreenPopinCard } from './fullscreeen-popin-card'
import { FullscreenPopinAction } from './fullscreen-popin-action'

interface FullScreenPopinProps {
  children: ReactNode
  title: string
  action: ReactNode | string
}
export const FullScreenPopin: FC<FullScreenPopinProps> = ({
  children,
  title,
  action,
}) => (
  <FullscreenPopinProvider>
    <FullscreenPopinAction>{action}</FullscreenPopinAction>
    <FullScreenPopinCard title={title}>{children}</FullScreenPopinCard>
  </FullscreenPopinProvider>
)
