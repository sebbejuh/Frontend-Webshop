export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  description: string;
}

export interface ExtendedProductInterface extends ProductInterface {
  frequency: string;
}

export interface ProductPropsInterface {
  data: ProductInterface;
}