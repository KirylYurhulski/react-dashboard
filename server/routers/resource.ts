import { Router } from 'express'
import { Controller } from '../controllers/resource'

export const router = Router()

router.get('/', Controller.getAll)