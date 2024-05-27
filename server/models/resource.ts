export interface Resource {
  warehouse: {
    id: string,
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
  }[],
}