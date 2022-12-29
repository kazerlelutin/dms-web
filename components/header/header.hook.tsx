import { useContext } from 'react'
import { SessionContext } from '../session/session.context'
import { HeaderResult } from './header'

export const useHeader = (): HeaderResult => {
  const session = useContext(SessionContext)
  return { session }
}
