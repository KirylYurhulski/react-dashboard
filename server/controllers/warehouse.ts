import { Request, Response } from 'express'
import { Warehouse } from '../models/warehouse'
import { warehouses } from '../data/warehouses'


export class Controller {
  static async getAll(req: Request, res: Response) {
    res.status(200).json(warehouses)
  }

  static async getOne(req: Request, res: Response) {
    const warehouse: Warehouse[] = warehouses.filter( item => item.id == req.params.id )
    res.status(200).json(Object.assign({}, ...warehouse))
  }
}