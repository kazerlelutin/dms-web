export type UserProfile = 'free' | 'premium' | 'all_star'

export interface IUser {
  id: string
  twitch_id: string
  profile: UserProfile
  login: string
  channel: string
  token_profile?: string
  current_channel: string
  slider_token: string
  updatedAt: Date
  createdAt: Date
}
