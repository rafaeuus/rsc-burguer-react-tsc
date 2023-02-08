import { iProducts } from "../UserContext/types";

export interface iCartProviderProps {
  children: React.ReactNode;
}

export interface iProductsCart extends iProducts {
  amount: number;
}

export interface iCartContextProps {
  cart: iProducts[];
  addToCart: (productToAdd: iProducts) => void;
  removeFromCart: (productToRemove: iProducts) => void;
  setCart: React.Dispatch<React.SetStateAction<iProductsCart[]>>;
  deleteFromCart: (productToDelete: iProducts | iProductsCart) => void;
}
