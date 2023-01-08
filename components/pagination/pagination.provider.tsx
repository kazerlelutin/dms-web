import { ReactNode, useState } from 'react'
import { PaginationContext } from './pagination.context'

type PaginationProviderProps = {
  children: ReactNode
}

type PaginationProviderState = {
  currentPage: number
  totalPage: number
  cursor: string | number | undefined
  perPage: number
}

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  children,
}) => {
  const [pagination, setPagination] = useState<PaginationProviderState>({
    currentPage: 1,
    totalPage: 1,
    cursor: undefined,
    perPage: 50,
  })

  const state = {
    pagination,
    next: () =>
      setPagination((prevState) => ({
        ...prevState,
        currentPage: prevState.currentPage + 1,
      })),
    previous: () =>
      setPagination((prevState) => ({
        ...prevState,
        currentPage: prevState.currentPage - 1,
      })),
    setPage: (currentPage: number) =>
      setPagination((prevState) => ({ ...prevState, currentPage })),
    setTotal: (totalPage: number) =>
      setPagination((prevState) => ({ ...prevState, totalPage })),
  }

  return (
    <PaginationContext.Provider value={state}>
      {children}
    </PaginationContext.Provider>
  )
}
