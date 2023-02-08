import { Banner } from "../../components/Banner/Banner";
import { FormsLogin } from "../../components/Forms/FormsLogin/FormsLogin";
import { StyledHomePage } from "./style";

export const LoginPage = () => {
  return (
    <StyledHomePage>
      <div>
        <FormsLogin />
        <Banner />
      </div>
    </StyledHomePage>
  );
};
