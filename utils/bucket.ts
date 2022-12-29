import {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  ListBucketsCommand,
} from '@aws-sdk/client-s3'

export default class S3 {
  s3Client: S3Client
  bucketName: string

  constructor() {
    this.bucketName = process.env.S3_BUCKET || ''
    this.s3Client = new S3Client({
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.S3_KEY || '',
        secretAccessKey: process.env.S3_PRIVATE || '',
      },
      endpoint: process.env.S3_ENDPOINT,
    })
  }

  async sendImage(
    folder: string,
    imageStream: any,
    fileName: string,
    tag: string
  ) {
    try {
      const link = `${folder}/${fileName}.png`
      const Bucket = await this.findOrCreateBucket()
      const buf = new Buffer(
        imageStream.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
      )
      const S3_PUBLIC_ENDPOINT = process.env.S3_PUBLIC_ENDPOINT || ''

      await this.s3Client.send(
        new PutObjectCommand({
          Bucket,
          ACL: 'public-read',
          Key: link,
          ContentType: 'image/png',
          ContentEncoding: 'base64',
          Body: buf,
          Tagging: 'dms=' + tag,
        })
      )
      return `${S3_PUBLIC_ENDPOINT.replace(
        'BUCKETNAME',
        this.bucketName
      )}/${link}`
    } catch (e) {
      return e
    }
  }

  async findOrCreateBucket(): Promise<string> {
    const Name = this.bucketName
    const { Buckets } = await this.s3Client.send(new ListBucketsCommand({}))
    try {
      const bucketIsExist = Buckets?.find((bucket) => bucket.Name === Name)
      if (!bucketIsExist) {
        await this.s3Client.send(new CreateBucketCommand({ Bucket: Name }))
      }
    } catch (e) {
      throw new Error()
    }
    return Name
  }
}
