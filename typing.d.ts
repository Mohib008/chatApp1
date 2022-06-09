export interface Tweet extends tweetBody {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'tweet'
  _blockTweet: boolean
}

export type tweetBody = {
  text: string
  userName: string
  profileImg: string
  image?: string
}