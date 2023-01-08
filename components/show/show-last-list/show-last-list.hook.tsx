import { IShow } from '../../../types/show.interface'
import { apiUrls } from '../../../utils/api-url'
import { useFetch } from '../../hooks/fetch.hook'
import { ShowLastListResult } from './show-last-list'
import { useContext } from 'react'
import { SessionContext } from '../../session/session.context'

export const useShowLastList = (): ShowLastListResult => {
  const ctx = useFetch<IShow[]>(apiUrls.show.last)
  const { id } = useContext(SessionContext)

  return { ...ctx, myId: id }
}
