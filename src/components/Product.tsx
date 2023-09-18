import { useShopContext } from "../context/useCartContext";
import { Link } from 'react-router-dom';

export const Product = (props: ProductPropsInterface) => {
  const { id, name, price, imgURL } = props.data; //extracts some properties from object props.data and make them variables
  const { addToCart, cartItems } = useShopContext();  //extracts addToCart function and cartItems object from custom hook

  const cartItemAmount = cartItems[id]
  return (
    <li className="product">
      <div className="product-img">
        <img src={imgURL} />
      </div>
      <div className="product-text">
        <h3>{name}</h3>
        <h4>Pris: {price} kr</h4>
      </div>
      <div className="product-btn">
        <button className="addToCartBtn" onClick={() => addToCart(id)}> {/* runs addToCart function from ShopContext with id*/}
          Köp ({cartItemAmount}) {/* if amount is greater than 0 display the amount*/}
        </button>
        <Link to={`/${id}`}>
          <button>Detaljer</button>
        </Link>
      </div>
    </li>
  )
}