import { usePagination } from './pagination.hook'
import { ReactNode } from 'react'
import { Factory } from '../layouts/factory'
import { PaginationView } from './pagination.view'
import { FetchResult } from '../hooks/fetch.hook'

export type PaginationProps = {
  children: ReactNode
}

export type PaginationFetch = {
  cursor: string | number
  totalPage: number
  perPage: number
  currentPage: number
}

export type FetchAndPagination<T> = FetchResult<T & PaginationFetch>

export type DataPagination<T> = T & PaginationFetch

export type PaginationResults = {
  pagination: PaginationFetch
  next: () => void
  previous: () => void
  setPage: (currentPage: number) => void
  setTotal: (totalPage: number) => void
}

const Pagination = Factory<unknown, PaginationResults>(
  usePagination,
  PaginationView
)

export default Pagination
