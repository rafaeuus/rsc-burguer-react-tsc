import { StyledLoading } from "../../styles/StyledLoading";
import { StyledLoadingPage } from "./style";

export const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <StyledLoading className="loading-icon" />
    </StyledLoadingPage>
  );
};
