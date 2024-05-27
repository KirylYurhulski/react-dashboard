import { Request, Response } from 'express'
import { stock } from '../data/stocks'

export class Controller {

  static async getAll(req: Request, res: Response) {
    const { warehouseId, dats } = req.query

    if (warehouseId) {
      const warehouseStock = stock.filter( item => item.warehouseId === warehouseId )

      if (dats) {
        warehouseStock.map( item => {
          const warehouseDatsStock = item.stock.filter( item => item.dats === dats )
          const result = Object.assign(
            {
              maxCapacity: item.maxСapacity,
              prcntWarning: item.prcntWarning,
              prcntError: item.prcntError,
            },
            ...warehouseDatsStock
          )
          res.status(200).json({
            maxCapacity: result.maxCapacity,
            value: result.value,
            prcntWarning: result.prcntWarning,
            prcntError: result.prcntError,
            displayValue: `Занято ${ result.value } из ${ result.maxCapacity } (т)`            
          })
        } )
      } else {
        res.status(200).json(Object.assign({}, ...warehouseStock))
      }
    } else {
      res.status(200).json(stock)
    }
  }
}