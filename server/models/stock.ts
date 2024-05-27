export interface Stock {
  warehouseId: string,
  prcntWarning: 70,
  prcntError: 80,
  maxСapacity: number,

  stock: {
    dats: string,
    value: number,
  }[]
}