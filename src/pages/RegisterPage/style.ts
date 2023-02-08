import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  height: 100vh;
  padding: 20px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 142px;
    margin: 0 18px;
  }

  @media (max-width: 768px) {
    > div {
      flex-direction: column;
      gap: 50px;
    }

    height: 100%;
    padding: 20px 0;
  }
`;
