import { Router } from 'express'
import { Controller } from '../controllers/workShift'

export const router = Router()

router.get('/', Controller.getAll)
router.get('/:warehouseId', Controller.getByWarehouse)