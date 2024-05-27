export interface Resource {
  warehouseId: string,
  dats: {
    dats: string,
    dataset: {
      name: string,
      value: {
        put: number,
        inn: number,
        out: number        
      }
    }[]
  }[]
}