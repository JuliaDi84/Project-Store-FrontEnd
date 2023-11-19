export class Item {

  private _id?:string;
  private _title:string;
  private _description:string = '';
  private _category:string = '';
  private _size:string = '';
  private _price: string = '';
  private _imageUrl: string = '';

  public constructor(title: string, description: string, category: string, size:string, price: string, imageUrl: string) {
    // ?? is null operator
    this._title = title ?? '';
    this._description = description ?? '';
    this._category = category ?? '';
    this._size = size ?? '';
    this._price = price ?? '';
    this._imageUrl = imageUrl ?? ''

  }
  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get id(): string {
    return this._id ?? '';
  }

  set id(value: string) {
    this._id = value;
  }

  public get title() {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }


  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}
