import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Button } from '../../ui/button/button'
import { Col } from '../../ui/col/col'
import { Info } from '../../ui/info/info'
import { Label } from '../../ui/label/label'
import { ShowCreateFormResult } from './show-create-form'
const MarkdownEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
})

export const ShowCreateFormView: FC<ShowCreateFormResult> = ({
  channel,
  t,
  fields,
  handleChange,
  loading,
  handleSubmit,
}) => (
  <Col>
    <Info>
      {t('info_create_channel')} <b>{channel}</b>
      {'.'}
    </Info>
    <form onSubmit={handleSubmit}>
      <Col>
        <Label required>{t('show_name')}</Label>
        <input
          required
          placeholder="show name"
          value={fields.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <label>{t('add_desc')}</label>
        <MarkdownEditor
          height={200}
          minHeight={200}
          enableScroll={true}
          preview="edit"
          value={fields.description}
          onChange={(value: string) => handleChange('description', value)}
        />
        <Button loading={loading} type="submit">
          {t('create_the_show')}
        </Button>
      </Col>
    </form>
  </Col>
)
