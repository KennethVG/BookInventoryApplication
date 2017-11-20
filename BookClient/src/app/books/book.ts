export class Book {
  constructor(public title: string, public author: string, public id: number, public publisher?: string,
              public genre?: string, public language?: string, public isbn?: string, public numberOfPages?: number) {
  }
}
