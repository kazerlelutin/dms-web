import { createContext } from 'react'
import { PaginationResults } from './pagination'

export const PaginationContext = createContext<PaginationResults>(null)
