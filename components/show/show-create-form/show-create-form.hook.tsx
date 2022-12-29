import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { ChannelContext } from '../../channel/channel.context'
import { usePost } from '../../hooks/post.hook'
import { useTranslate } from '../../hooks/translate.hook'
import { ShowCreateFormResult } from './show-create-form'

export const useShowCreateForm = (): ShowCreateFormResult => {
  const t = useTranslate(),
    channel = useContext(ChannelContext),
    [fields, setFields] = useState<{ name: string; description: string }>({
      name: '',
      description: '',
    }),
    router = useRouter(),
    { loading, post, data } = usePost('show/create')

  const handleChange = (key: 'name' | 'description', value: string) => {
    if (loading) return
    setFields((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSubmit = () => {
    post(fields)
  }

  useEffect(() => {
    if (data) router.push('/dashboard/show/' + data)
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
