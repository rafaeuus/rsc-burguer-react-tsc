import styled, { keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoading = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 0.5s linear infinite;
`;
