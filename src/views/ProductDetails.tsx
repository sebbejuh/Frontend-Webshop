import { useParams } from 'react-router-dom';
import productsJSON from '../fake-db/products.json';
import { useShopContext } from "../context/useCartContext";

const ProductDetails = () => {
  const products: (ProductInterface | ExtendedProductInterface)[] = productsJSON.products; //creates products variable to hold the products array from the JSON file
  const { id } = useParams();
  const productId = Number(id); //converts id to Number and assigns new variable
  //find the product with the matching id from parameters
  const product = products.find((product) => product.id === productId);
  
  const { addToCart, cartItems } = useShopContext(); //extracts addToCart function and cartItems object from custom hook

  const cartItemAmount = cartItems[productId]

  if (!product) {
    //handle the case where the product is not found
    return <section><h1>Produkten hittades inte.</h1></section>;
  }

  return (
    <section className="product-details">
      <h1>{product.name}</h1>
      <div className="product-details-2">
        <div className="product-details-img">
          <img src={product.imgURL} alt={product.name} />
        </div>
        <div className="product-details-text">
          <h3>{product.name}</h3>
          <h4>Pris: {new Intl.NumberFormat('sv-SV').format(product.price)} kr</h4>
          {/* if frequency is found in product - render the frequency as ExtendedProductInterface - type assertion*/}
          {('frequency' in product) && (
            <h4>Frekvens: {(product as ExtendedProductInterface).frequency} Hz</h4>
          )}
          <p>{product.description}</p>
          <button className="addToCartBtn" onClick={() => addToCart(productId)}> {/* runs addToCart function from ShopContext with productId*/}
          Köp <span>{`(${cartItemAmount})`}</span> {/*display the amount*/}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;