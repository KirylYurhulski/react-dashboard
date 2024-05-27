import { Router } from 'express'
import { Controller } from '../controllers/stock'

export const router: Router = Router()

router.get('/', Controller.getAll)