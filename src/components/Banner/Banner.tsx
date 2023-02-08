import { Logo } from "../../components/Logo/Logo";
import { StyledBanner } from "./style";
import { CgBox } from "react-icons/cg";
import dots from "./assets/img/dots.svg";

export const Banner = () => {
  return (
    <StyledBanner>
      <Logo />
      <div className="div-text">
        <CgBox className="box-icon" />
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os
          <span> melhores </span>
          ingredientes.
        </p>
      </div>
      <img src={dots} alt="Bolinhas espaçadas" />
    </StyledBanner>
  );
};
