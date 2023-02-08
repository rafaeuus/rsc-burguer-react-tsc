import styled, { keyframes } from "styled-components";

const expand = keyframes`
  0% {
    transform: scaleX(0) scaleY(0.6)
  }
  100% {
    transform: scaleX(1) scaleY(1)
  }
`;

export const StyledFormSearch = styled.form`
  display: flex;
  position: relative;

  > div > input {
    width: 306px;
    border-radius: 8px;
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.grey100};
    padding: 20.5px 15px;
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    background: #fff;
    color: ${({ theme }) => theme.color.grey600};
  }

  > div > input::placeholder {
    color: ${({ theme }) => theme.color.grey100};
  }

  > div > input:focus {
    border-color: ${({ theme }) => theme.color.grey600};
  }

  > div > button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 20px;
    margin: 10px;
    border: 2px solid ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primary};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-height: 41px;
  }

  > div > button > .magnifier-icon {
    color: white;
    width: max-content;
    height: max-content;
  }

  @media (max-width: 768px) {
    > div {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      animation: ${expand} 0.2s ease;
    }

    > div > button {
      top: 0;
      right: 0;
      max-width: 58px;
      margin: 20px;
    }

    > div > input {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 357px) {
    > div {
      height: 100px;
    }

    > div > button {
      height: 100%;
      max-height: 60px;
    }
  }
`;
