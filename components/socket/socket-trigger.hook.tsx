import { useContext, useEffect } from 'react'
import { SocketContext } from './socket.context'

export const useSocketTrigger = (
  type: string,
  action: (msg: unknown) => void
) => {
  const message = useContext(SocketContext)

  useEffect(() => {
    if (message && message?.type === type) {
      action(message?.message)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])

  return message
}
