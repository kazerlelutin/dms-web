import { Error } from '../components/hooks/fetch.hook'

export type ContextFetch<T> = {
  refetch: (newBody?: object) => void
  reSync: (newBody?: object) => void
  data: T
  error: Error
  loading: boolean
}
