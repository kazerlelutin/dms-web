import { ReactNode, useState } from 'react'
import { ChannelContext } from './channel.context'

interface ChannelProviderProps {
  children: ReactNode
  channel: string
}

export const ChannelProvider: React.FC<ChannelProviderProps> = ({
  children,
  channel,
}) => {
  const ctx = useState<string>(channel)

  return (
    <ChannelContext.Provider value={ctx}>{children}</ChannelContext.Provider>
  )
}
