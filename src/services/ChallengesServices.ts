import { Challenge, IChallenge } from '../models/challenge'

export class ChallengeService {
  public async findAll() {
    try {
      return await Challenge.find()
    } catch (error) {
      return {
        code: 500,
        message: 'Something went wrong'
      }
    }
  }

  public async findById(id: string) {
    try {
      return await Challenge.findById({ _id: id })
    } catch (error) {
      return {
        code: 404,
        message: 'Challenge not found'
      }
    }
  }

  public async create({
    slug,
    title,
    shortDescription,
    longDescription,
    cover,
    repository
  }: Omit<IChallenge, '_id'>) {
    try {
      const newChallenge = {
        slug,
        title,
        shortDescription,
        longDescription,
        cover,
        repository
      }

      return await Challenge.create(newChallenge)
    } catch (error) {
      return {
        code: 500,
        message: 'Something went wrong'
      }
    }
  }

  public update({
    _id,
    slug,
    title,
    shortDescription,
    longDescription,
    cover,
    repository
  }: IChallenge) {

  }

  public async delete(id: string) {
    try {
      return await Challenge.deleteOne({ _id: id })
    } catch (error) {

    }
  }
}
