import { useRouter } from 'next/router'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { ChannelContext } from '../../channel/channel.context'
import { usePost } from '../../hooks/post.hook'
import { useTranslate } from '../../hooks/translate.hook'
import { BroadcastCreateFormResult } from './broadcast-create-form'

export const useBroacastCreateForm = (): BroadcastCreateFormResult => {
  const t = useTranslate(),
    channel = useContext(ChannelContext),
    [fields, setFields] = useState<{ name: string; description: string }>({
      name: '',
      description: '',
    }),
    router = useRouter(),
    { loading, post, data } = usePost('broadcast/add')

  const handleChange = (key: 'name' | 'description', value: string) => {
    if (loading) return
    setFields((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    post(fields)
  }

  useEffect(() => {
    if (data) router.push('/dashboard/broadcast/' + data)
  }, [data, router])

  return {
    t,
    channel,
    fields,
    handleChange,
    handleSubmit,
    loading,
  }
}
