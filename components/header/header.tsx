import { Factory } from '../layouts/factory'
import { Session } from '../session/session.provider'
import { useHeader } from './header.hook'
import { HeaderView } from './header.view'

export interface HeaderResult {
  session: Session
}
export const Header = Factory<unknown, HeaderResult>(useHeader, HeaderView)
