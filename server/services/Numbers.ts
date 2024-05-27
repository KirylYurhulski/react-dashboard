export class Numbers {
  static random(min:number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}