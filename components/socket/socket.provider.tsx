import { FC, ReactNode, useContext } from 'react'
import { SocketContext } from './socket.context'
import { useSocket } from './socket.hook'
import { SessionContext } from '../session/session.context'

interface SocketProviderProps {
  children: ReactNode
}

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const message = useSocket()

  return (
    <SocketContext.Provider value={message}>{children}</SocketContext.Provider>
  )
}
