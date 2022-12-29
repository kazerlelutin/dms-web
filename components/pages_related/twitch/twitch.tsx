import { Factory } from '../../layouts/factory'
import { useTwitch } from './twitch.hook'
import { TwitchView } from './twitch.view'

export interface TwitchResults {
  t: (text: string) => string
}
export const Twitch = Factory<unknown, TwitchResults>(useTwitch, TwitchView)
