import { Link, useParams } from 'react-router-dom';
import productsJSON from '../fake-db/products.json';
import { useShopContext } from "../context/useCartContext";
import { ArrowLeft } from 'phosphor-react';

const ProductDetails = () => {
  const products: (ProductInterface | ExtendedProductInterface)[] = productsJSON.products; //creates products variable to hold the products array from the JSON file
  const { id } = useParams();
  const productId = Number(id); //converts id to Number and assigns new variable
  //find the product with the matching id from parameters
  const product = products.find((product) => product.id === productId);

  const { addToCart } = useShopContext(); //extracts addToCart function from custom hook

  if (!product) {
    //handle the case where the product is not found
    return <section><h1>Produkten hittades inte.</h1></section>;
  }

  return (
    <section className="product-details">
      <h1>{product.name}</h1>
      <div className="details-link-container">
        <Link className='details-link' to='/webshop-ts/'> <ArrowLeft size={42} /> </Link>
      </div>
      <div className="product-details-2">
        <div className="product-details-img">
          <img src={product.imgURL} alt={product.name} />
        </div>
        <div className="product-details-text">
          <h3>{product.name}</h3>
          <h4>Pris: {new Intl.NumberFormat('sv-SV').format(product.price)} kr</h4>
          {/* if nonEuCountry is found in product - render the nonEuCountry as ExtendedProductInterface - type assertion*/}
          {('nonEuCountry' in product) && (
            <h4>Land: {(product as ExtendedProductInterface).nonEuCountry} <span>(utanför EU)</span></h4>
          )}
          <p>{product.description}</p>
          <button className="addToCartBtn" onClick={() => addToCart(productId)}> {/* runs addToCart function from ShopContext with productId*/}
            Köp
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;