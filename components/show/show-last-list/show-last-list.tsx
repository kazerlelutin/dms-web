import { ShowLastListView } from './show-last-list.view'
import { Factory } from '../../layouts/factory'
import { useShowLastList } from './show-last-list.hook'
import { IShow } from '../../../types/show.interface'

export interface ShowLastListResult {
  data: IShow[]
  loading: boolean
  myId: string
}

export const ShowLastList = Factory<unknown, ShowLastListResult>(
  useShowLastList,
  ShowLastListView
)
