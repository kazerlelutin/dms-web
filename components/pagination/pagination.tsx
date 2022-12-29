import { usePagination } from './pagination.hook'
import { ReactNode } from 'react'
import { Factory } from '../layouts/factory'
import { PaginationView } from './pagination.view'

export type PaginationProps = {
  children: ReactNode
}

export type PaginationResults = {
  pagination: {
    currentPage: number
    totalPage: number
  }
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
