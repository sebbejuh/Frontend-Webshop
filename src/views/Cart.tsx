import { CartItem } from "../components/CartItem";
import { useShopContext } from "../context/useCartContext";
import productsJSON from '../fake-db/products.json'

const Cart = () => {
  const products: (ProductInterface | ExtendedProductInterface)[] = productsJSON.products; //creates products variable to hold the products array from the JSON file
  const { cartItems, getCartAmount } = useShopContext();
  const totalAmount = getCartAmount()
  
  return (
    <section className="cart">
      <h1>Kundvagn</h1>
      <ul className="cart-items">
        {products.map((product) => {//maps through allProducts array
          if (cartItems[product.id] !== 0) {//if product id isnt 0 (product ids starts at 1 and increases)
            return <CartItem key={product.id} data={product} />//passes product object through props
          }
        })}
      </ul>
      {totalAmount > 0 ?//if totalAmount is greater than 0
        <div className="checkout">
          <p>Totalt pris: {totalAmount} kr</p>
          <button> Beställ </button>
        </div>//else
        : <h3>Kundvagnen är tom.</h3>}
    </section>
  )
}
export default Cart