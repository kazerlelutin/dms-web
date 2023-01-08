import { useContext } from 'react'
import { ShowListResult } from './show-list'
import { ShowListContext } from './show-list.context'
import { SessionContext } from '../../session/session.context'

export const useShowList = (): ShowListResult => {
  const { data, loading } = useContext(ShowListContext),
    session = useContext(SessionContext)
  return {
    shows: data?.shows || [],
    loading,
    myId: session?.id,
  }
}
