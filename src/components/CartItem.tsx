import { useShopContext } from "../context/useCartContext";
import { Link } from 'react-router-dom';

export const CartItem = (props: ProductPropsInterface) => {
  const { id, name, price, imgURL } = props.data;//extract some properties from object props.data and make them variables
  const { cartItems, addToCart, removeFromCart, updateCartItem } = useShopContext();//extracts functions and object from custom hook

  return (
    <li className='cart-item'>
      <div className="cart-img">
        <Link to={`/${id}`}>
          <img src={imgURL} />
        </Link>
      </div>
      <div className="cart-product-text">
        <h3>{name}</h3>
        <h4>Pris: {new Intl.NumberFormat('sv-SV').format(price)} kr</h4>
        <div className="cart-count">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input name='amount' value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </li>
  )
}
