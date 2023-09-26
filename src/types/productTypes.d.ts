interface ProductInterface {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  description: string;
}

interface ExtendedProductInterface extends ProductInterface {
  nonEuCountry: string;
}

interface ProductPropsInterface {
  data: ProductInterface | ExtendedProductInterface;
}