import { Router } from 'express'
import { router as warehouseRouter } from './warehouse'
import { router as stockRouter } from './stock'
import { router as ResourceRouter } from './resource'
import { router as WorkShiftRouter } from './workShift'

const router:Router = Router()

router.use('/warehouse', warehouseRouter)
router.use('/stock', stockRouter)
router.use('/resource', ResourceRouter)
router.use('/workshift', WorkShiftRouter)

export { router }