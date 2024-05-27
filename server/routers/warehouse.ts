import { Router } from 'express'
import { Controller } from '../controllers/warehouse'

export const router: Router = Router()

router.get('/', Controller.getAll)
router.get('/:id', Controller.getOne)

