import { Factory } from '../layouts/factory'
import { useBreadcrumb } from './breadcrumb.hook'
import { BreadcrumbView } from './breadcrumb.view'

export interface BreadcrumbResult {
  page: string
  t: (text: string) => string
}

export const Breadcrumb = Factory<unknown, BreadcrumbResult>(
  useBreadcrumb,
  BreadcrumbView
)
