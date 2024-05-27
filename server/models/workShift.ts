export interface WorkShift {
  warehouseId: string,
  dataset: {
    id: number,
    put: number,
    out: number,
    inn: number,
  }[]  
}