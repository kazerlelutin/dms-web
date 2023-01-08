import { FC, ReactNode } from 'react'
import { useTranslate } from '../hooks/translate.hook'
import { Flex } from '../ui/flex/flex'

interface PromiseRenderProps {
  loading: boolean
  data: unknown
  loader?: ReactNode
  children: ReactNode
  noResultMessage?: string
}
export const PromiseRender: FC<PromiseRenderProps> = ({
  loading,
  data,
  loader,
  children,
  noResultMessage,
}) => {
  const t = useTranslate()
  if (loading && !loader) return <>{'...'}</>
  if (loading && loader) return <>{loader}</>
  if (!loading && !data)
    return <Flex center>{t(noResultMessage || 'no_result')}</Flex>
  if (!loading && data && Array.isArray(data) && data.length === 0)
    return <Flex center>{t(noResultMessage || 'no_result')}</Flex>

  return <>{children}</>
}
