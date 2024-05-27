import { Request, Response } from 'express'
import { resource } from '../data/resource'
import { Dats } from '../services/Dats'

export class Controller {
  static async getAll(req: Request, res: Response) {
    const { warehouseId, dats } = req.query

    if (warehouseId) {
      const warehouseRsrc = resource.filter( item => item.warehouseId === warehouseId )

      if (dats) {
        warehouseRsrc.map( item => {
          item.dats.filter( item => item.dats === dats ).map( item => {
            res.status(200).json({
              title: `Работа ресурсов за ${ Dats.convertToExternal(item.dats) }`,
              dataset: item.dataset
            })            
          })
        })
      } else {
        res.status(200).json(warehouseRsrc)
      }
    } else {
      res.status(200).json(resource)
    }
  }
}