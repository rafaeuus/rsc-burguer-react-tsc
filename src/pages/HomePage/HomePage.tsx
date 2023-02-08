import { useContext } from "react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { UserContext } from "../../Contexts/UserContext/UserContext";
import { StyledHomePage } from "./style";
import { toast } from "react-toastify";
import { StyledLoading } from "../../styles/StyledLoading";

export const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  const { productsLoading, products } = useContext(UserContext);

  return (
    <StyledHomePage>
      <Header />
      <div className="container">
        {productsLoading ? (
          <div>
            <StyledLoading className="loading-icon" />
          </div>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <img src={product.img} alt={`Imagem de um ${product.name}`} />
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.category}</p>
                  <span>R$ {product.price.toFixed(2)}</span>
                  <Button
                    color="grey"
                    type="button"
                    size="medium"
                    onClick={() => {
                      addToCart(product);
                      toast.success("Item adicionado ao carrinho!");
                    }}
                  >
                    Adicionar
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledHomePage>
  );
};
