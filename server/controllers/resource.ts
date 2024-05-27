import { Request, Response } from 'express'

export class Controller {
  static async getAll(reg: Request, res: Response) {
    res.status(200).json({success: true})
  }
}