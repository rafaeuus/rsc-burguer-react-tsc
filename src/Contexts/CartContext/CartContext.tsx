import { createContext, useState } from "react";
import { iCartContextProps, iCartProviderProps, iProductsCart } from "./types";
import { iProducts } from "../UserContext/types";
import { toast } from "react-toastify";

export const CartContext = createContext({} as iCartContextProps);

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [cart, setCart] = useState([] as iProductsCart[]);

  const addToCart = (productToAdd: iProducts | iProductsCart) => {
    if (cart.some((product) => product.id === productToAdd.id)) {
      const newArray = cart.map((product) => {
        if (product.id === productToAdd.id) {
          product.amount && product.amount++;
        }
        return product;
      });
      setCart(newArray);
    } else {
      setCart([...cart, { ...productToAdd, amount: 1 }]);
    }
  };

  const removeFromCart = (productToRemove: iProducts | iProductsCart) => {
    const newArray = cart.filter((product) => {
      if (product.id === productToRemove.id) {
        product.amount = product.amount - 1;
      }

      if (product.amount <= 0) {
        toast.error("Item removido do carrinho");
      }

      return product.amount > 0 ? product : undefined;
    });

    setCart(newArray as iProductsCart[]);
  };

  const deleteFromCart = (productToDelete: iProducts | iProductsCart) => {
    const newArray = cart.filter(
      (product) => product.id !== productToDelete.id
    );
    setCart(newArray);
    toast.error("Item removido do carrinho");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
