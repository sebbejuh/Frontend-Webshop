export interface CartItemInterface {
  [key: number]: number;
}

export interface ShopContextValueInterface {
  cartItems: CartItemInterface;
  getCartAmount: () => number;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItem: (newAmount: number, itemId: number) => void;
}