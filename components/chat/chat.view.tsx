import { FC, useEffect, useRef } from 'react'
import { ChatMessage } from '../ui/chat/chat-message/chat-message'
import { ChatResults } from './chat'
import styles from './chat.module.css'

export const ChatView: FC<ChatResults> = ({ messages }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref?.current) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [ref, messages])

  return (
    <div className={styles.messages} ref={ref}>
      {messages.map((msg) => (
        <ChatMessage {...msg} key={msg.message} />
      ))}
    </div>
  )
}
