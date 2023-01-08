import { createContext } from 'react'
export interface ObsContextResult {
  obs: any
  setObs: (obs: any) => void
}
export const ObsContext = createContext<ObsContextResult>(null)
