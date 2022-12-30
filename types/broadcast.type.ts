import { UserType } from './user.type'
export type BroadcastType = {
  id: number
  name: string
  description?: string
  slider_token: string
  user: UserType
  userId: number
  invite_token: string
  channel: string
  updatedAt: Date
  createdAt: Date
  scheduledMessages: []
  episode: []
}
