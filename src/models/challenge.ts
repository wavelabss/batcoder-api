import mongoose, { Document, Model } from 'mongoose'

export interface IChallenge {
  _id: string
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  cover: string
  repository: string
}

interface ChallengeModel extends Omit<IChallenge, '_id'>, Document {}

const schema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    cover: { type: String, required: true },
    repository: { type: String, required: true }
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    }
  }
)

export const Challenge: Model<ChallengeModel> = mongoose.model('Challenge', schema)
