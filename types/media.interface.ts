export interface IMedia {
  id: string
  name: string
  description?: string
  url: string
  type: MediaType
  updatedAt: Date
  createdAt: Date
}

export enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
}
