export class Product {
  constructor(
    id: string,
    ownerId: string,
    title: string,
    imageUrl: string,
    description: string,
    price: number
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  public id: string;
  public ownerId: string;
  public imageUrl: string;
  public title: string;
  public description: string;
  public price: number;
}
