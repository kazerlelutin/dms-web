import { ReactNode, useState, useEffect } from 'react'
import { NavigationContext } from './navigation.context'
import { useRouter } from 'next/router'
import { Broadcasts } from '../panels/broadcasts/broadcasts'
import { Broadcast } from '../panels/broadcast/broadcast'

interface NavigationProviderProps {
  children: ReactNode
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const router = useRouter()
  const ctx = useState<string>()

  if (router.query?.page === 'broadcast') return <Broadcasts />
  if (router.query?.broadcast) return <Broadcast />

  return (
    <NavigationContext.Provider value={ctx}>
      {children}
    </NavigationContext.Provider>
  )
}
