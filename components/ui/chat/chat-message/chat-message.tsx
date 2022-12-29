import { FC } from 'react'
import styles from './chat-message.module.css'

interface ChatMessageProps {
  color: string
  username: string
  message: string
}
export const ChatMessage: FC<ChatMessageProps> = ({
  color,
  username,
  message,
}) => (
  <div>
    <span className={styles.username} style={{ color: color }}>
      {username}
      {': '}
    </span>
    <span dangerouslySetInnerHTML={{ __html: message }} />
  </div>
)
