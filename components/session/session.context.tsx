import { createContext } from 'react'
import { Session } from './session.provider'
export const SessionContext = createContext<Session>(null)
