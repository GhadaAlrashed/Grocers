export class CreateProductModel {
    constructor(
      public name: string,
      public description: string,
      public image: string,
      public price: number ) {
    }
}
