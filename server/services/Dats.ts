export class Dats {
  static convertToExternal(dats: Date = new Date()): string{
    const day   = dats.getDate().toString().padStart(2, '0')
    const month = (dats.getMonth() + 1).toString().padStart(2, '0')
    const year  = dats.getFullYear()
    
    return `${year}${month}${day}`
  }
}