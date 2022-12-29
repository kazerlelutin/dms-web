import { FC } from 'react'
import { Button } from '../../ui/button/button'
import { ChatFormResult } from './chat-form'
import styles from './chat-form.module.css'

export const ChatFormView: FC<ChatFormResult> = ({
  value,
  setValue,
  text,
  handleSubmit,
}) => (
  <div className={styles.send}>
    <input value={value} onChange={(e) => setValue(e.target.value)} />
    <Button variant="normal" onClick={handleSubmit}>
      {text}
    </Button>
  </div>
)
