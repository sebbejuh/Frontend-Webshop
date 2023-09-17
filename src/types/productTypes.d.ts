interface ProductInterface {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  description: string;
}

interface ExtendedProductInterface extends ProductInterface {
  frequency: string;
}

interface ProductPropsInterface {
  data: ProductInterface | ExtendedProductInterface;
}