import { CartProvider } from "./CartContext/CartContext";
import { UserProvider } from "./UserContext/UserContext";

interface iProviders {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProviders) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
