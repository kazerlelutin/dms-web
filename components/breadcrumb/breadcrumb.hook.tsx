import { useRouter } from 'next/router'
import { BreadcrumbResult } from './breadcrumb'
import { useTranslate } from '../hooks/translate.hook'

export const useBreadcrumb = (): BreadcrumbResult => {
  const { query } = useRouter(),
    t = useTranslate()

  return {
    page:
      query?.page && typeof query.page === 'string' ? query.page : 'dashboard',
    t,
  }
}
