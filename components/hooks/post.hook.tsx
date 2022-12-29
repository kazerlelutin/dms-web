import { useContext, useState } from 'react'
import { MiniLoaderContext } from '../mini-loader/mini-loader.context'
import { SessionContext } from '../session/session.context'

interface Error {
  message: string
  response: {
    status: number
    data: string
  }
}

export function usePost<T>(url: string): {
  loading: boolean
  error: Error
  data: T
  post: (body?: Object, newUrl?: string) => void
} {
  const [data, setData] = useState<T>(),
    [error, setError] = useState<Error>(),
    [loading, setLoading] = useContext(MiniLoaderContext),
    session = useContext(SessionContext),
    abortController = new AbortController()

  async function handlePost(body: Object, newUrl?: string) {
    setLoading(true)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/${newUrl || url}`,
      {
        method: 'POST',
        signal: abortController.signal,
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + session.token_api,
        },
        body: JSON.stringify(body || {}),
      }
    )

    const resJson = await res.json()
    setData(resJson)
    if (res.status !== 200) {
      setError(resJson)
    }

    setLoading(false)
  }

  return {
    post: (body?: object, newUrl?: string) => handlePost(body, newUrl),
    data,
    error,
    loading,
  }
}
