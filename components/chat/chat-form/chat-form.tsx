import { Factory } from '../../layouts/factory'
import { useChatForm } from './chat-form.hook'
import { ChatFormView } from './chat-form.view'

export interface ChatFormResult {
  text: string
  value: string
  setValue: (e: string) => void
  handleSubmit: () => void
}

export const ChatForm = Factory<unknown, ChatFormResult>(
  useChatForm,
  ChatFormView
)
