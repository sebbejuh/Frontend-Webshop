import { useContext } from "react";
import { ShopContext } from "./CartContext";
import { ShopContextValueInterface } from '../types/contextTypes';

export const useShopContext = (): ShopContextValueInterface => {
  const contextValue = useContext(ShopContext);
  if (!contextValue) {
    throw new Error("useShopContext must be used within a ShopContextProvider");
  }
  return contextValue;
};