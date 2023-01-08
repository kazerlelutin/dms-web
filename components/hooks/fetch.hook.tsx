import { useContext, useEffect, useState } from 'react'
import { MiniLoaderContext } from '../mini-loader/mini-loader.context'
import { SessionContext } from '../session/session.context'

export interface Error {
  message: string
  response: {
    status: number
    data: string
  }
}
export type FetchResult<T> = {
  refetch: (newBody?: object) => void
  reSync: (newBody?: object) => void
  data: T
  error: Error
  loading: boolean
}

export function useFetch<T>(url: string, body: object = {}): FetchResult<T> {
  const [data, setData] = useState<T>(),
    [error, setError] = useState<Error>(),
    [inProgress, setInProgress] = useState<boolean>(false),
    [loading, setLoading] = useContext(MiniLoaderContext),
    session = useContext(SessionContext),
    [abort, setAbort] = useState<AbortController>()

  useEffect(() => {
    setAbort(new AbortController())
  }, [])

  async function handleFetch(newBody?: object, reSync?: boolean) {
    if (inProgress) return
    setInProgress(true)
    if (!reSync) setLoading(true)

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/${url}`, {
        method: 'POST',
        signal: abort.signal,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + session.token_api,
        },
        body: JSON.stringify(newBody || body || {}),
      })

      const resJson = await res.json()
      setData(resJson)
      if (res.status !== 200) {
        setError(resJson)
      }
    } catch (e) {
      setError(e)
    }
    if (!reSync) setLoading(false)
    setInProgress(false)
  }

  useEffect(() => {
    if (!abort) return
    //timeout for prevent preload page
    setTimeout(() => {
      if (!data) handleFetch()
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return () => {
      if (inProgress) abort.abort('cleanup')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abort])

  return {
    refetch: (newBody?: object) => handleFetch(newBody),
    //Resync not trigger Loading
    reSync: (newBody?: object) => handleFetch(newBody, true),
    data,
    error,
    loading,
  }
}
