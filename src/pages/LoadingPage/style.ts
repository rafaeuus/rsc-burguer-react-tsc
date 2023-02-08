import styled from "styled-components";

export const StyledLoadingPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;

  > .loading-icon {
    width: 80px;
    height: 80px;
    color: ${({ theme }) => theme.color.grey300};
  }
`;
