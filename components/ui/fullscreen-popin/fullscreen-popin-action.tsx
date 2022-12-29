import { FC, ReactNode, useContext } from 'react'
import { FullscreenPopinContext } from './fullscreen-popin.context'

interface FullscreenPopinActionProps {
  children: ReactNode | string
}

export const FullscreenPopinAction: FC<FullscreenPopinActionProps> = ({
  children,
}) => {
  const [_isOpen, setIsOpen] = useContext(FullscreenPopinContext)

  return <span onClick={() => setIsOpen(true)}>{children}</span>
}
