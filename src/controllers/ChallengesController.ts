import { Request, Response } from 'express'
import { ChallengeService } from '../services/ChallengesServices'

const challengeService = new ChallengeService()

export class ChallengesController {
  public async findAll(_: Request, response: Response) {
    return response.status(200).json(await challengeService.findAll())
  }

  public async findById(request: Request, response: Response) {
    const { id } = request.params

    return response.status(200).json(await challengeService.findById(id))
  }

  public async create(request: Request, response: Response) {
    const {
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    } = request.body

    return response.status(201).json(await challengeService.create({
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    }))
  }

  public async update(request: Request, response: Response) {
    const {
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    } = request.body

    const { id } = request.params

    return response.status(200).json(await challengeService.update({
      _id: id,
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    }))
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params

    return response.status(200).json(await challengeService.delete(id))
  }
}
