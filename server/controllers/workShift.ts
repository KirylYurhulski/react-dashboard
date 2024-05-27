import { Request, Response } from 'express'
import { WorkShift } from '../models/workShift';
import { workShifts } from '../data/workShift'

type responseEntity = {
  warehouseId: string,
  title: string,
  dataset: {
    id: number,
    description: string,
    put: number,
    out: number,
    inn: number,     
  }[]
}

export class Controller {
  static async getAll(req: Request, res: Response) {
    res.status(200).json(Controller.convertEntity(workShifts))
  }

  static async getByWarehouse(req: Request, res: Response) {
    const entitySet = Controller.convertEntity(workShifts.filter( item => item.warehouseId === req.params.warehouseId ) )
    entitySet.map(item => {
      res.status(200).json( { ...item } )
    })
  }

  private static convertEntity(arrayFrom: WorkShift[]): responseEntity[] {
    const entitySet: responseEntity[] = []

    arrayFrom.map( item => {
      const entity: responseEntity = {
        warehouseId: item.warehouseId,
        title: 'Производительность: (Операции - ШТ)',
        dataset: Array.from(item.dataset, (ds) => { return {
          id: ds.id,
          description: `Смена ${ ds.id }`,
          put: ds.put,
          inn: ds.inn,
          out: ds.out,
          all: ( ds.put + ds.inn + ds.out )
        } } )
      }
      entitySet.push(entity)
    } )
    return entitySet
  }
}