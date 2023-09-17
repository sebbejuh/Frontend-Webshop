import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
//Views
import Shop from "./views/Shop";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound"
import ProductDetails from "./views/ProductDetails";
//sass
import "./App.scss";
//context provider
import { ShopContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route index element={<Shop />} />
            <Route path="/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App