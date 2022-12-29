import { Factory } from '../../layouts/factory'
import { useBroacastCreateForm } from './broadcast-create-form.hook'
import { BroadcastCreateFormView } from './broadcast-create-form.view'

export interface BroadcastCreateFormResult {
  t: (text: string) => string
  channel: string
  fields: { name: string; description: string }
  handleChange: (key: 'name' | 'description', value: string) => void
  handleSubmit: () => void
  loading: boolean
}
export const BroadcastCreateForm = Factory<unknown, BroadcastCreateFormResult>(
  useBroacastCreateForm,
  BroadcastCreateFormView
)
