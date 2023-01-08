import { useState } from 'react'
import { NavigationContext } from './navigation.context'
import { useRouter } from 'next/router'
import { Pages } from '../../types/pages.enum'
import { Dashboard } from '../panels/dashboard/dashboard'
import { Shows } from '../panels/shows/shows'

export const NavigationProvider: React.FC = () => {
  const router = useRouter()
  const ctx = useState<string>()

  const navigate = (page: Pages) =>
    router.push({
      query: {
        page,
      },
    })

  const current =
    router?.query?.page && typeof router.query.page === 'string'
      ? router.query.page
      : 'dashboard'

  const Component = () => {
    if (current === Pages.dashboard) return <Dashboard />
    if (current === Pages.shows) return <Shows />

    return <Dashboard />
  }
  return (
    <NavigationContext.Provider value={{ navigate, current }}>
      <Component />
    </NavigationContext.Provider>
  )
}
