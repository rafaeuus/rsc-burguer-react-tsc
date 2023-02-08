import styled from "styled-components";

export const StyledCartModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin: 20px;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
  }

  > div > .modal-cart-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 22px;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 5px 5px 0 0;
  }

  > div > .modal-cart-title > h2 {
    color: #fff;
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > div > .modal-cart-title > button > .close-icon {
    filter: invert(100%);
  }

  > div > .modal-cart-title > button {
    width: max-content;
  }

  > div > .cart-empty-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    height: 158px;
    gap: 20px;
  }

  > div > .cart-empty-div > h3 {
    color: ${({ theme }) => theme.color.grey600};
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  > div > .cart-empty-div > p {
    text-align: center;
    color: ${({ theme }) => theme.color.grey300};
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
