import styled from "styled-components";

export const StyledForms = styled.div`
  border: 2px solid ${({ theme }) => theme.color.grey100};
  padding: 26px 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  max-width: 500px;

  > div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.grey600};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  > form > .input-div {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  > p {
    max-width: 327px;
    margin: 0 auto;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.grey50};
  }
`;
