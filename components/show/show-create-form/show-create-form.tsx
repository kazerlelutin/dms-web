import { Factory } from '../../layouts/factory'
import { useShowCreateForm } from './show-create-form.hook'
import { ShowCreateFormView } from './show-create-form.view'

export interface ShowCreateFormResult {
  t: (text: string) => string
  channel: string
  fields: { name: string; description: string }
  handleChange: (key: 'name' | 'description', value: string) => void
  handleSubmit: () => void
  loading: boolean
}
export const ShowCreateForm = Factory<unknown, ShowCreateFormResult>(
  useShowCreateForm,
  ShowCreateFormView
)
