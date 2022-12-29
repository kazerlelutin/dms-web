import { ReactNode, useContext, useEffect, useState } from 'react'
import { ChannelContext } from '../channel/channel.context'
import { ChatContext } from './chat.context'
import tmi from 'tmi.js'
import { SessionContext } from '../session/session.context'

interface ChatProviderProps {
  children: ReactNode
}
export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const session = useContext(SessionContext)
  const [channel] = useContext(ChannelContext)
  const [chat, setChat] = useState<undefined | tmi.Client>(undefined)

  useEffect(() => {
    const client = new tmi.Client({
      options: { debug: false },
      identity: {
        username: session.login,
        password: `oauth:${session.token}`,
      },
      channels: [channel],
    })
    setChat(client)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel])

  useEffect(() => {
    connectToChat()
    return () => {
      if (chat) chat.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat])

  const connectToChat = async () => {
    if (chat) await chat.connect()
  }

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>
}
