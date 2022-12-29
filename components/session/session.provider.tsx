import { ReactNode } from 'react'
import { SessionContext } from './session.context'

interface SessionProviderProps {
  children: ReactNode
  session: Session
}

export interface Session {
  login: string
  profile_image_url: string
  offline_image_url: string
  display_name: string
  id: string
  description: string
  broadcaster_type: string
  view_count: number
  created_at: string
  token: string
  token_api: string
  current_channel: string
  channel_count: number
  profile: 'free' | 'premium' | 'all_star'
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
  session,
}) => (
  <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
)
