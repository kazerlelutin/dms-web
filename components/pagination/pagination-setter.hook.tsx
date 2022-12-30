/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { PaginationContext } from './pagination.context'
import { PaginationFetch } from './pagination'

interface PaginationSetter {
  loading: boolean
  data: PaginationFetch
  refetch: (body?: Object) => void
}

export const usePaginationSetter = ({
  loading,
  data,
  refetch,
}: PaginationSetter): {} => {
  const { pagination, setTotal, setPage } = useContext(PaginationContext)

  useEffect(() => {
    if (!loading && pagination?.currentPage <= data?.totalPage) {
      refetch({ page: 1 })
      setPage(1)
    }
  }, [pagination.currentPage])

  useEffect(() => {
    if (!loading && data?.totalPage) {
      setTotal(data.totalPage)
    }
  }, [data])

  return {}
}
