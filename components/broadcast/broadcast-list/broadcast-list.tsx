import { Factory } from '../../layouts/factory'
import { BroadcastType } from '../../../types/broadcast.type'
import { useBroadcastList } from './broadcast-list.hook'
import { BroadcastListView } from './broadcast-list.view'
import { FC } from 'react'
import { PaginationProvider } from '../../pagination/pagination.provider'

export interface BroadcastListResult {
  broadcasts: BroadcastType[]
  loading: boolean
}
export const BroadcastListFactory = Factory<unknown, BroadcastListResult>(
  useBroadcastList,
  BroadcastListView
)

export const BroadcastList: FC = () => (
  <PaginationProvider>
    <BroadcastListFactory />
  </PaginationProvider>
)
