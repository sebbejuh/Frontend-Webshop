import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { useShopContext } from "../context/useCartContext";

const Navbar = () => {
  const { cartItems } = useShopContext();  //extracts addToCart function and cartItems object from custom hook

  let totalItems = 0; //creates variable with value 0
  for (const id in cartItems) { //loops through cartItems by id
    totalItems += cartItems[id];//adds the value for each property to totalItems
  }
  return (
    <header className="navbar">
      <nav className="navbar-links">
        <Link to='/webshop-ts/'>Butik</Link>
        <Link to='/webshop-ts/cart'>
          <ShoppingCart size={30} />
          {totalItems > 0 && <span>{totalItems}</span>}
        </Link>
      </nav>
    </header>
  )
}

export default Navbar