import { useChat } from './chat.hook'
import tmi from 'tmi.js'
import { ChatView } from './chat.view'
import { Factory } from '../layouts/factory'

export interface ChatMsg {
  tags?: tmi.ChatUserstate
  message: string
  username: string
  color: string
}

export interface ChatResults {
  messages: ChatMsg[]
}
export const Chat = Factory<unknown, ChatResults>(useChat, ChatView)
