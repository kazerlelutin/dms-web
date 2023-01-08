import { IMedia } from './media.interface'
import { ITag } from './tag.interface'

export interface IChronicle {
  id: string
  title: string
  content: string
  tags: ITag[]
  medias: IMedia[]
  updatedAt: Date
  createdAt: Date
}
