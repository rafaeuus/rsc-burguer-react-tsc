import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext/UserContext";
import { Button } from "../Button/Button";
import { FormsSearch } from "../Forms/FormsSeacrh/FormsSearch";
import { Logo } from "../Logo/Logo";
import { CartModal } from "../Modal/CartModal/CartModal";
import { StyledHeader } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { toast } from "react-toastify";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { MdOutlineSearch } from "react-icons/md";
import { useOutClick } from "../../hooks/useOutClick";

export const Header = () => {
  const { navigate } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const { cart } = useContext(CartContext);
  const [showSearch, setShowSearch] = useState<"close" | "show">("close");

  const searchRef = useOutClick(() => setShowSearch("close"));

  return (
    <StyledHeader>
      <div className="container">
        <Logo />
        <nav>
          <FormsSearch
            searchRef={searchRef}
            className={`search-bar ${showSearch}`}
          />
          <Button
            color="transparent"
            size="medium"
            className="open-search-button"
            onClick={() => setShowSearch("show")}
          >
            <MdOutlineSearch className="open-search-icon" />
          </Button>
          <div>
            <Button
              color="transparent"
              type="button"
              size="medium"
              onClick={() => setModal(true)}
            >
              <FaShoppingCart className="cart-icon" />
            </Button>

            {cart.length > 0 && (
              <span>
                {cart.reduce((acc, curValue) => {
                  return acc + (curValue.amount ? curValue.amount : 1);
                }, 0)}
              </span>
            )}
          </div>
          <Button
            color="transparent"
            type="button"
            size="medium"
            onClick={() => {
              localStorage.clear();
              navigate("/");
              toast.success("Logout feito com sucesso!");
            }}
          >
            <IoMdExit className="exit-icon" />
          </Button>
        </nav>
        {modal && <CartModal setModal={setModal} />}
      </div>
    </StyledHeader>
  );
};
