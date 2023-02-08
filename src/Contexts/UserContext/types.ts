import { NavigateFunction } from "react-router-dom";

export interface iFormData {
  email: string;
  password: string;
  name?: string;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  email: string;
  name: string;
  id: number;
}

export interface iUserContextProps {
  user: iUser | null;
  makeLogin: (data: iFormData) => Promise<void>;
  loading: boolean;
  makeRegister: (data: iFormData) => Promise<void>;
  navigate: NavigateFunction;
  products: iProducts[];
  getProducts: (search?: string) => Promise<void>;
  productsLoading: boolean;
}

export interface iUserLogin {
  accessToken: string;
  user: iUser;
}

export interface iUserRegister {
  accessToken: string;
  user: iUser;
}

export interface iProductsResponse {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  amount?: number;
}

export interface iApiGetUser {
  email: string;
  password: string;
  name: string;
  id: number;
}
