import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { Button } from "../Button/Button";
import { StyledCartItens } from "./style";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export const CartItens = () => {
  const { cart, addToCart, removeFromCart, setCart, deleteFromCart } =
    useContext(CartContext);

  return (
    <StyledCartItens>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.img} alt={`Imagem de um ${product.name}`} />
              <div>
                <h2>{product.name}</h2>
                <div>
                  <Button
                    color="transparent"
                    size="medium"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    <BsPlusLg className="icons" />
                  </Button>
                  <span>{product.amount}</span>
                  <Button
                    color="transparent"
                    type="button"
                    size="medium"
                    onClick={() => removeFromCart(product)}
                  >
                    <BsDashLg className="icons" />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              color="transparent"
              type="button"
              size="medium"
              onClick={() => deleteFromCart(product)}
            >
              <FaTrash className="trash-icon" />
            </Button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total</h3>
        <span>
          R${" "}
          {cart
            .reduce((acc, currentValue) => {
              const amount = currentValue.amount ? currentValue.amount : 0;
              return acc + currentValue.price * amount;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
      <Button
        color="grey"
        type="button"
        size="big"
        onClick={() => {
          setCart([]);
        }}
      >
        Remover todos
      </Button>
    </StyledCartItens>
  );
};
