/* eslint-disable react-hooks/exhaustive-deps */

import { useFetch } from '../../hooks/fetch.hook'
import {
  FetchAndPagination,
  PaginationFetch,
} from '../../pagination/pagination'
import { usePaginationSetter } from '../../pagination/pagination-setter.hook'
import { BroadcastListResult } from './broadcast-list'

export const useBroadcastList = (): BroadcastListResult => {
  const { data, loading, refetch } = useFetch<
    FetchAndPagination<{
      broadcasts: string[]
    }>
  >('broadcast/all')

  usePaginationSetter({ data, loading, refetch })

  return {
    loading,
    broadcasts: data?.broadcasts || [],
  }
}
