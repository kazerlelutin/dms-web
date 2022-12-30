export type UserProfile = 'free' | 'premium' | 'all_star'

export type UserType = {
  id: number
  twitch_id: string
  profile: UserProfile
  login: string
  channel: string
  token_profile?: string
  current_channel: string
  updatedAt: Date
  createdAt: Date
  medias: []
  broadcasts: []
  scheduledMessages: []
  editors: []
}
