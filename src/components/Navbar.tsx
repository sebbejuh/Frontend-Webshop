import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to='/'>Butik</Link>
        <Link to='/cart'>
          <ShoppingCart size={30} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar