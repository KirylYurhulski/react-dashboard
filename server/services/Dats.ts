export class Dats {
  static convertToInternal(dats: Date = new Date()): string{
    const day   = dats.getDate().toString().padStart(2, '0')
    const month = (dats.getMonth() + 1).toString().padStart(2, '0')
    const year  = dats.getFullYear()
    
    return `${year}${month}${day}`
  }

  static convertToExternal(dats: string): string {
    return `${dats.substring(6)}.${dats.substring(4, 2)}.${dats.substring(0, 4)}`
  }
}