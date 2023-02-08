import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";
import {
  iUserContextProps,
  iUserProviderProps,
  iUser,
  iFormData,
  iUserLogin,
  iUserRegister,
  iProductsResponse,
  iProducts,
  iApiGetUser,
} from "./types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([] as iProducts[]);
  const navigate = useNavigate();

  const getProducts = async (search?: string) => {
    try {
      setProductsLoading(true);
      const { data } = await api.get<iProductsResponse[]>("/products");
      if (search !== "" && typeof search !== "undefined") {
        const newArray = data.filter(
          (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(newArray);
      } else {
        setProducts(data);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    } finally {
      setProductsLoading(false);
      setLoading(false);
    }
  };

  const checkUser = async () => {
    const id = localStorage.getItem("@id: burguer-kenzie");
    const localToken = localStorage.getItem("@token: burguer-kenzie");

    if (!id) {
      setLoading(false);
      return;
    }

    try {
      api.defaults.headers.common.authorization = `Bearer ${localToken}`;
      const { data } = await api.get<iApiGetUser>(`/users/${id}`);
      setUser(data);
      await getProducts();
      navigate("/home");
    } catch (error) {
      setUser(null);
      localStorage.clear();
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeLogin = async (login: iFormData) => {
    const toastLoad = toast.loading("Carregando");
    try {
      setLoading(true);
      const { data } = await api.post<iUserLogin>("/login", login);
      api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`;
      localStorage.setItem("@token: burguer-kenzie", data.accessToken);
      localStorage.setItem("@id: burguer-kenzie", data.user.id + "");
      setUser(data.user);
      await getProducts();
      toast.update(toastLoad, {
        render: "Usuário logado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setUser(null);
        localStorage.clear();
        toast.update(toastLoad, {
          render: error.response?.data,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const makeRegister = async (register: iFormData) => {
    const toastLoad = toast.loading("Carregando");
    try {
      setLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await api.post<iUserRegister>("/users", register);
      toast.update(toastLoad, {
        render: "Usuário criado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setUser(null);
        localStorage.clear();
        toast.update(toastLoad, {
          render: error.response?.data,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        makeLogin,
        loading,
        makeRegister,
        navigate,
        products,
        getProducts,
        productsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
