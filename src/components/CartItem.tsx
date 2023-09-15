import { useShopContext } from "../context/useShopContext";

export const CartItem = (props: ProductPropsInterface) => {
    const { id, name, price, imgURL } = props.data;//extract some properties from object props.data and make them variables
    const { cartItems, addToCart, removeFromCart, updateCartItem } = useShopContext();//extracts functions and object from custom hook

    return (
        <li className='cart-item'>
            <img src={imgURL}/>
            <div className="cart-product-text">
              <h3>{name}</h3>
              <h4>{price} kr</h4>
              <div className="cart-count">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input name='amount' value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}>+</button>
              </div>
            </div>
        </li>
    )
}
