import { useContext } from 'react'
import { PaginationContext } from './pagination.context'

export const usePagination = () => {
  const ctx = useContext(PaginationContext)

  return ctx
}
