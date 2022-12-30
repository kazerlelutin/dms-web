import { useEffect, useState, useContext } from 'react'
import io from 'socket.io-client'
import { SessionContext } from '../session/session.context'

export const useSocket = () => {
  const session = useContext(SessionContext)
  const [message, setMessage] = useState<{ type: string; message: unknown }>()

  const cbSocket = (data: { type: string; message: unknown }) => {
    setMessage(data)
    setTimeout(() => setMessage(undefined), 400)
  }

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_URL_LIVE)
    if (session) {
      socket.on('connect', () => {
        socket.on(session.id + '-dms', cbSocket)
        socket.on('public-dms', cbSocket)
      })
    }

    return () => {
      socket?.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return message
}
