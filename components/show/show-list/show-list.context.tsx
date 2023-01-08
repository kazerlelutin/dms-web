import { createContext } from 'react'
import { IShow } from '../../../types/show.interface'
import { FetchAndPagination } from '../../pagination/pagination'

export const ShowListContext =
  createContext<FetchAndPagination<{ shows: IShow[] }>>(null)
