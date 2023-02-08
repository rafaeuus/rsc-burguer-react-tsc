import styled from "styled-components";

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  max-width: 377px;
  width: 100%;

  > .div-text {
    border: 1px solid ${({ theme }) => theme.color.grey100};
    padding: 17px 14px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 19px;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  }

  > .div-text > .box-icon {
    min-width: 60px;
    min-height: 60px;
    padding: 18px 21px;
    background: ${({ theme }) => theme.color.primary50};
    color: #219653;
    border-radius: 5px;
  }

  > .div-text > p {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.grey300};
    line-height: 22px;
  }

  > .div-text > p > span {
    color: ${({ theme }) => theme.color.grey600};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  > img {
    width: 181px;
    height: 79px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    > img {
      display: none;
    }
  }
`;
