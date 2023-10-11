import { createContext, useState, useEffect, ReactNode} from 'react';
import productsJSON from '../fake-db/products.json'

const ShopContext = createContext<ShopContextValueInterface | null>(null);// creates context with value null

const products: (ProductInterface | ExtendedProductInterface)[] = productsJSON.products; // creates products variable to hold the products array from the JSON file
// GET DEFAULT CART FUNCTION
const getDefaultCart = () => {
  const cart: CartItemInterface = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
// CONTEXT PROVIDER FUNCTION
const ShopContextProvider = (props: { children: ReactNode }) => {

  const [cartItems, setCartItems] = useState<CartItemInterface>(() => {//useState
    // Initialize the cart from localStorage, or use the default cart if no data is found
    const storedCartString = localStorage.getItem('cart');
    const storedCart = storedCartString ? JSON.parse(storedCartString) : getDefaultCart();
    return storedCart || getDefaultCart();
  });

  useEffect(() => {// Save cart data to localStorage whenever cartItems changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  // GET CART AMOUNT FUNCTION
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };
  // ADD TO CART FUNCTION
  const addToCart = (itemId: number) => { //takes in an id of a product
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));//takes in previous state of cartItems and adds 1 to the itemId.
  };
  // REMOVE FROM CART FUNCTION
  const removeFromCart = (itemId: number) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));//takes in previous state of cartItems and reduces by 1 to the itemId.
    }
  };
  // UPDATE CART FUNCTION
  const updateCartItem = (newAmount: number, itemId: number) => {//takes in a new amount of products for an id
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));//replaces the previous amount with the new
  };
  // REMOVE PRODUCT FROM CART
  const removeCartItem = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };
  // EMPTY CART FUNCTION
  const emptyCart = () => {
    const defaultCart = getDefaultCart();
    setCartItems(defaultCart);
  };

  const contextValue: ShopContextValueInterface = {//object of functions and object to be used by provider
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getCartAmount,
    emptyCart,
    removeCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };