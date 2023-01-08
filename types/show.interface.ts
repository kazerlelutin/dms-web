import { Roles } from './roles.enum'
import { ITag } from './tag.interface'
import { IUser } from './user.interface'

export interface IShow {
  id: string
  name: string
  description?: string
  tags: ITag[]
  updatedAt: Date
  createdAt: Date
  users: Array<IUser & { role: Roles }>
}
