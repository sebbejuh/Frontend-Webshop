interface CartItemInterface {
  [key: number]: number;
}

interface ShopContextValueInterface {
  cartItems: CartItemInterface;
  getCartAmount: () => number;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItem: (newAmount: number, itemId: number) => void;
  emptyCart: () => void;
  removeCartItem: (itemId: number) => void;
}