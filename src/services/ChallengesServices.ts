import { v4 as uuidv4 } from 'uuid'
import { dataBase } from '../database'
import { IChallenge } from '../models/challenge'

export class ChallengeService {
  public findAll() {
    return dataBase
  }

  public findById(id: string) {
    const challenge = dataBase.find(challenge => challenge._id === id)

    if (!challenge) return { message: 'Challenge not found' }

    return challenge
  }

  public create({
    slug,
    title,
    shortDescription,
    longDescription,
    cover,
    repository
  }: Omit<IChallenge, '_id'>) {
    if (!slug) return { error: 'Please provide a slug' }

    const challenge = dataBase.find(challenge => challenge.slug === slug)

    if (challenge) return { error: 'Challenge already exists' }

    const newChallenge = {
      _id: uuidv4(),
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    }

    dataBase.push(newChallenge)

    return newChallenge
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
    const challenge = dataBase.find(challenge => challenge._id === _id)

    if (!challenge) return { error: 'Challenge not found' }

    challenge.slug = slug
    challenge.title = title
    challenge.shortDescription = shortDescription
    challenge.longDescription = longDescription
    challenge.cover = cover
    challenge.repository = repository

    return challenge
  }

  public delete(id: string) {
    const challengeIndex = dataBase.findIndex(challenge => challenge._id === id)

    if (challengeIndex === -1) {
      return { error: 'Challenge not found' }
    }

    dataBase.splice(challengeIndex, 1)

    return { message: 'Challenge deleted' }
  }
}
