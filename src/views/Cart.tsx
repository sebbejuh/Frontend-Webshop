import { CartItem } from "../components/CartItem";
import { useShopContext } from "../context/useCartContext";
import productsJSON from '../fake-db/products.json'
import { Link } from 'react-router-dom';

const Cart = () => {
  const products: (ProductInterface | ExtendedProductInterface)[] = productsJSON.products; //creates products variable to hold the products array from the JSON file
  const { cartItems, getCartAmount } = useShopContext();
  const totalAmount = getCartAmount()
  
  return (
    <section className="cart">
      <h1>Kundvagn</h1>
      <ul className="cart-list">
        {products.map((product) => {//maps through allProducts array
          if (cartItems[product.id] !== 0) {//if product id isnt 0 (product ids starts at 1 and increases)
            return <CartItem key={product.id} data={product} />//passes product object through props
          }
        })}
      </ul>
      {totalAmount > 0 ?//if totalAmount is greater than 0
        <div className="checkout">
          <p>Totalt pris: {new Intl.NumberFormat('sv-SV').format(totalAmount)} kr</p>
          <button> Beställ </button>
        </div>//else
        : <li className='cart-item'>
          <h3>Kundvagnen är tom.</h3>
          </li>}
      <Link className="shop-link" to='/webshop-ts/'>Fortsätt handla</Link>
    </section>
  )
}
export default Cart