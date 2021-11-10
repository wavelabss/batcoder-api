import { Request, Response } from 'express'
import { ChallengeService } from '../services/ChallengesServices'

const challengeService = new ChallengeService()

export class ChallengesController {
  public findAll(_: Request, response: Response) {
    return response.status(200).json(challengeService.findAll())
  }

  public findById(request: Request, response: Response) {
    const { id } = request.params

    return response.status(200).json(challengeService.findById(id))
  }

  public create(request: Request, response: Response) {
    const {
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    } = request.body

    return response.status(201).json(challengeService.create({
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    }))
  }

  public update(request: Request, response: Response) {
    const {
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    } = request.body

    const { id } = request.params

    return response.status(200).json(challengeService.update({
      id,
      slug,
      title,
      shortDescription,
      longDescription,
      cover,
      repository
    }))
  }

  public delete(request: Request, response: Response) {
    const { id } = request.params

    return response.status(200).json(challengeService.delete(id))
  }
}
