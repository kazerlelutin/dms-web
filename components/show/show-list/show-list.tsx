import { FC } from 'react'
import { IShow } from '../../../types/show.interface'
import { apiUrls } from '../../../utils/api-url'
import { useFetch } from '../../hooks/fetch.hook'
import { Factory } from '../../layouts/factory'
import { DataPagination } from '../../pagination/pagination'
import { Session } from '../../session/session.provider'
import { ShowListContext } from './show-list.context'
import { useShowList } from './show-list.hook'
import { ShowListView } from './show-list.view'

export interface ShowListResult {
  shows: IShow[]
  loading: boolean
  myId?: Session['id']
}
const ShowListFactory = Factory<unknown, ShowListResult>(
  useShowList,
  ShowListView
)

export const ShowList: FC = () => {
  const ctx = useFetch<DataPagination<{ shows: IShow[] }>>(apiUrls.show.list)

  return (
    <ShowListContext.Provider value={ctx}>
      <ShowListFactory />
    </ShowListContext.Provider>
  )
}
