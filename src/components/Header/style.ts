import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.color.grey0};
  padding: 20px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  > div > nav {
    display: flex;
    align-items: center;
    gap: 23px;
  }

  > div > nav > button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div > nav > div {
    display: flex;
    align-items: center;
  }

  > div > nav > .open-search-button {
    display: none;
  }

  @media (max-width: 768px) {
    > div > nav > .open-search-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > div > nav > .open-search-button > .open-search-icon {
      width: 33px;
      height: 33px;
      color: ${({ theme }) => theme.color.grey200};
    }
  }

  > div > nav > div > span {
    background: ${({ theme }) => theme.color.primary};
    min-width: 20px;
    min-height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.body};
    color: ${({ theme }) => theme.color.grey0};
    transform: translateX(-8px) translateY(-10px);
  }

  > div > nav > div > button > .cart-icon {
    color: ${({ theme }) => theme.color.grey200};
    width: 25px;
    height: 25px;
  }

  > div > nav > div > button > .cart-icon:hover {
    color: ${({ theme }) => theme.color.grey300};
  }

  > div > nav > button > .exit-icon {
    color: ${({ theme }) => theme.color.grey200};
    width: 25px;
    height: 25px;
  }

  > div > nav > button > .exit-icon:hover {
    color: ${({ theme }) => theme.color.grey300};
  }

  @media (max-width: 768px) {
    > div > nav > .search-bar {
      display: none;
    }

    > div > nav > .show {
      display: block;
    }
  }
`;
