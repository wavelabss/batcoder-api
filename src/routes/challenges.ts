import { Router } from 'express'
import { ChallengesController } from '../controllers/ChallengesController'

const routes = Router()

const challengesController = new ChallengesController()

routes.get('/challenges', challengesController.findAll)
routes.get('/challenges/:id', challengesController.findById)
routes.post('/challenges', challengesController.create)
routes.put('/challenges/:id', challengesController.update)
routes.delete('/challenges/:id', challengesController.delete)

export default routes
