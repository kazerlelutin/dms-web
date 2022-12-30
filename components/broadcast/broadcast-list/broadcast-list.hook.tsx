/* eslint-disable react-hooks/exhaustive-deps */
import { BroadcastType } from '../../../types/broadcast.type'
import { useFetch } from '../../hooks/fetch.hook'
import { PaginationFetch } from '../../pagination/pagination'
import { usePaginationSetter } from '../../pagination/pagination-setter.hook'
import { BroadcastListResult } from './broadcast-list'

export const useBroadcastList = (): BroadcastListResult => {
  const { data, loading, refetch } = useFetch<
    {
      broadcasts: BroadcastType[]
    } & PaginationFetch
  >('broadcast/all')

  usePaginationSetter({ data, loading, refetch })

  return {
    loading,
    broadcasts: data?.broadcasts || [],
  }
}
