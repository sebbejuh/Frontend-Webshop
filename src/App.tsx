import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
//Views
import Shop from "./views/Shop";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound"
import ProductDetails from "./views/ProductDetails";
import Orders from "./views/Orders"
//sass
import "./App.scss";
//context provider
import { ShopContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/webshop-ts" element={<Shop />} />
            <Route path="/webshop-ts/:id" element={<ProductDetails />} />
            <Route path="/webshop-ts/cart" element={<Cart />} />
            <Route path="/webshop-ts/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App