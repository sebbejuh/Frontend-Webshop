import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-links">
        <Link to='/'>Butik</Link>
        <Link to='/cart'>
          <ShoppingCart size={30} />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar