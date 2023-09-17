import { useParams } from 'react-router-dom';
import productsJSON from '../fake-db/products.json'

const ProductDetails = () => {
  const products:(ProductInterface | ExtendedProductInterface)[] = productsJSON.products; //creates products variable to hold the products array from the JSON file
  const { id } = useParams();
  // Find the product with the matching id from parameters
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.imgURL} alt={product.name} />
      <div className="product-details-text">
        <h3>{product.name}</h3>
        <h4>{product.price} kr</h4>
        {/* if frequency is found in product - render the frequency as ExtendedProductInterface - type assertion*/}
        {('frequency' in product) && (
          <h4>{(product as ExtendedProductInterface).frequency} Hz</h4>
        )}
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;