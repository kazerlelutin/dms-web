import { createContext } from 'react'
import { Pages } from '../../types/pages.enum'

interface INavigationContext {
  navigate: (page: Pages) => void
  current: string
}
export const NavigationContext = createContext<INavigationContext>(null)
