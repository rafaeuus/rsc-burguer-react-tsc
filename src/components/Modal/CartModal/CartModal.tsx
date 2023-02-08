import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext/CartContext";
import { useOutClick } from "../../../hooks/useOutClick";
import { Button } from "../../Button/Button";
import { CartItens } from "../../CartItens/CartItens";
import { StyledCartModal } from "./style";
import { GrClose } from "react-icons/gr";

interface iCartModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartModal = ({ setModal }: iCartModalProps) => {
  const { cart } = useContext(CartContext);

  const modalRef = useOutClick(() => setModal(false));

  return (
    <StyledCartModal>
      <div ref={modalRef}>
        <div className="modal-cart-title">
          <h2>Carrinho de compras</h2>
          <Button
            onClick={() => setModal(false)}
            color="transparent"
            size="big"
          >
            <GrClose className="close-icon" />
          </Button>
        </div>
        {cart.length < 1 ? (
          <div className="cart-empty-div">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          <CartItens />
        )}
      </div>
    </StyledCartModal>
  );
};
