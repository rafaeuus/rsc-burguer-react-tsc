import { Banner } from "../../components/Banner/Banner";
import { FormsRegister } from "../../components/Forms/FormsRegister/FormsRegister";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div>
        <Banner />
        <FormsRegister />
      </div>
    </StyledRegisterPage>
  );
};
