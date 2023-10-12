import { useShopContext } from "../context/useCartContext";
import { Link } from 'react-router-dom';
import { X } from 'phosphor-react';

export const CartItem = (props: ProductPropsInterface) => {
  const { id, name, price, imgURL } = props.data;//extract some properties from object props.data and make them variables
  const { cartItems, addToCart, subtractFromCart, updateCartItem, removeCartItem } = useShopContext();//extracts functions and object from custom hook

  //input validation
  const InputChangeValidation = (inputValue: string, itemId: number) => {
    //checks if inputValue is a number
    if (!Number.isNaN(Number(inputValue))) {
      const newAmount = Number(inputValue);
      if(newAmount < 1001 && newAmount > 0){//checks if input is less than 1000 and greater than 0
        updateCartItem(newAmount, itemId);
      }
    }
  };

  return (
    <li className='cart-item'>
      <div className="cart-img">
        <Link to={`/webshop-ts/${id}`}>
          <img src={imgURL} />
        </Link>
      </div>
      <div className="cart-product-text">
        <h3>{name}</h3>
        <h4>Pris: {new Intl.NumberFormat('sv-SV').format(price)} kr</h4>
        <div className="cart-count">
          <button onClick={() => subtractFromCart(id)}>-</button>
          <input name='amount' value={cartItems[id]} onChange={(e) => InputChangeValidation(e.target.value, id)} onFocus={(e) => e.target.select()}/>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
      <div className="cart-remove">
        <button onClick={() => removeCartItem(id)}><X size={34} weight="bold" /></button>
      </div>
    </li>
  )
}
