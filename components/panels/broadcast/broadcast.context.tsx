import { createContext } from 'react'
import { FetchResult } from '../../hooks/fetch.hook'
export const BroadcastContext = createContext<FetchResult>(null)
